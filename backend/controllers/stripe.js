import Stripe from "stripe";

const stripe = new Stripe(process.env.PAYMENT_KEY);

export const paymentMethod = (req, res) => {
  console.log(req);
  stripe.charges.create(
    {
      amount: req.body.amount,
      currency: "usd",
      source: req.body.tokenId,
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(404).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
};
