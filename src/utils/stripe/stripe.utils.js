import { loadStripe } from "@stripe/stripe-js";
require("dotenv").config();

export const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY);
