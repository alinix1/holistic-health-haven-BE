const express = require("express");
const router = express.Router();
require("dotenv").config();

// initialize stripe
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// endpoint to obtain publishable key
router.get("/config", (_, response) => {
  response.send({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  });
});

// endpoint to create payment success
router.get("/success", (_, response) => {
  response.send({
    success: true,
  });
});

// endpoint to create a one-time payment
router.post("/create-payment-intent", async (request, response) => {
  try {
    const { amount } = request.body;
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      automatic_payment_methods: { enabled: true },
    });
    return response
      .status(200)
      .json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error("Error creating payment intent: ", error);

    if (error.type === "StripeInvalidRequestError") {
      return response.status(400).json({ error: error.message });
    }
    console.error("Error creating payment intent: ", error);
    response.status(500).json({ error: error.message });
  }
});

module.exports = router;
