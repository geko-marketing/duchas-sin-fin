import { NextResponse, type NextRequest } from "next/server";
import { stripe } from "@/lib/stripe";

export const runtime = "nodejs";

const MIN_EUR = 1;
const MAX_EUR = 10_000;

type Body = {
  amount?: unknown;
  name?: unknown;
  surname?: unknown;
  email?: unknown;
  country?: unknown;
  type?: unknown;
};

function sanitize(body: Body) {
  const amount = Number(body.amount);
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const surname = typeof body.surname === "string" ? body.surname.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const country = typeof body.country === "string" ? body.country.trim() : "";
  const donationType = body.type === "monthly" ? "monthly" : "once";

  if (!Number.isFinite(amount) || amount < MIN_EUR || amount > MAX_EUR) {
    return { error: `El importe debe estar entre ${MIN_EUR}€ y ${MAX_EUR}€.` };
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: "El email no es válido." };
  }
  return {
    amount: Math.round(amount * 100),
    name,
    surname,
    email,
    country,
    donationType,
  };
}

export async function POST(request: NextRequest) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 });
  }

  const data = sanitize(body);
  if ("error" in data) {
    return NextResponse.json({ error: data.error }, { status: 400 });
  }

  const origin = request.nextUrl.origin;
  const fullName = [data.name, data.surname].filter(Boolean).join(" ");
  const isMonthly = data.donationType === "monthly";

  try {
    const session = await stripe.checkout.sessions.create({
      mode: isMonthly ? "subscription" : "payment",
      payment_method_types: ["card"],
      customer_email: data.email,
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "eur",
            unit_amount: data.amount,
            ...(isMonthly ? { recurring: { interval: "month" } } : {}),
            product_data: {
              name: isMonthly
                ? "Donación mensual a Ducha Sin Fin"
                : "Donación a Ducha Sin Fin",
              description: "Tu aportación acelera la llegada de la ducha circular al mercado.",
            },
          },
        },
      ],
      ...(isMonthly ? {} : { submit_type: "donate" }),
      metadata: {
        donor_name: fullName,
        donor_country: data.country,
        donation_type: data.donationType,
      },
      success_url: `${origin}/donar/exito?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/crowdfunding?donation=cancelled`,
    });

    if (!session.url) {
      return NextResponse.json(
        { error: "No se pudo crear la sesión de pago." },
        { status: 502 },
      );
    }
    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("[donate] Stripe error", err);
    return NextResponse.json(
      { error: "Error al iniciar el pago. Inténtalo de nuevo." },
      { status: 500 },
    );
  }
}
