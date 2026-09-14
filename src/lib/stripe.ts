import Stripe from "stripe";

const key = process.env.STRIPE_SECRET_KEY;
if (!key) {
  throw new Error(
    "Missing STRIPE_SECRET_KEY. Add it to .env.local — see .env.example.",
  );
}

export const stripe = new Stripe(key);
