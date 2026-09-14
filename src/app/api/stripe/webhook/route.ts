import { NextResponse, type NextRequest } from "next/server";
import type Stripe from "stripe";
import { stripe } from "@/lib/stripe";

export const runtime = "nodejs";

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(request: NextRequest) {
  if (!webhookSecret) {
    return NextResponse.json(
      { error: "Webhook no configurado: falta STRIPE_WEBHOOK_SECRET" },
      { status: 500 },
    );
  }

  const signature = request.headers.get("stripe-signature");
  if (!signature) {
    return NextResponse.json(
      { error: "Falta cabecera stripe-signature" },
      { status: 400 },
    );
  }

  const rawBody = await request.text();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, signature, webhookSecret);
  } catch (err) {
    console.error(
      "[stripe-webhook] firma inválida:",
      err instanceof Error ? err.message : err,
    );
    return NextResponse.json(
      { error: "Firma de webhook inválida" },
      { status: 400 },
    );
  }

  try {
    await handleEvent(event);
  } catch (err) {
    console.error("[stripe-webhook] error procesando evento", event.type, err);
    return NextResponse.json(
      { error: "Error procesando evento" },
      { status: 500 },
    );
  }

  return NextResponse.json({ received: true });
}

async function handleEvent(event: Stripe.Event) {
  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object;
      const amount =
        typeof session.amount_total === "number"
          ? session.amount_total / 100
          : null;
      console.log("[stripe-webhook] ✅ donación completada", {
        sessionId: session.id,
        mode: session.mode,
        paymentIntent: session.payment_intent,
        subscription: session.subscription,
        amount,
        currency: session.currency,
        email: session.customer_email,
        name: session.metadata?.donor_name,
        country: session.metadata?.donor_country,
        type: session.metadata?.donation_type,
      });
      // TODO: persistir en BD / enviar email de agradecimiento cuando se conecte.
      return;
    }
    case "checkout.session.expired": {
      const session = event.data.object;
      console.log(
        "[stripe-webhook] ⏱ sesión expirada sin completar",
        session.id,
      );
      return;
    }
    case "charge.refunded": {
      const charge = event.data.object;
      console.log("[stripe-webhook] 💸 reembolso", {
        chargeId: charge.id,
        amount: charge.amount_refunded / 100,
      });
      return;
    }
    case "customer.subscription.created": {
      const sub = event.data.object;
      console.log("[stripe-webhook] 🔄 suscripción mensual creada", {
        subscriptionId: sub.id,
        customerId: sub.customer,
        status: sub.status,
      });
      // TODO: persistir suscripción en BD.
      return;
    }
    case "customer.subscription.deleted": {
      const sub = event.data.object;
      console.log("[stripe-webhook] ❌ suscripción cancelada", {
        subscriptionId: sub.id,
        customerId: sub.customer,
      });
      // TODO: actualizar estado en BD.
      return;
    }
    case "invoice.payment_succeeded": {
      const invoice = event.data.object;
      console.log("[stripe-webhook] 💚 cobro mensual exitoso", {
        invoiceId: invoice.id,
        amount: invoice.amount_paid / 100,
        currency: invoice.currency,
        email: invoice.customer_email,
      });
      // TODO: registrar cobro recurrente en BD / enviar recibo.
      return;
    }
    case "invoice.payment_failed": {
      const invoice = event.data.object;
      console.log("[stripe-webhook] ⚠️ cobro mensual fallido", {
        invoiceId: invoice.id,
        email: invoice.customer_email,
      });
      // TODO: notificar al donante para que actualice su método de pago.
      return;
    }
    default:
      return;
  }
}
