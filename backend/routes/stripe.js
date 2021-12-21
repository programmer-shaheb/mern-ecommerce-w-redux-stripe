import express from "express";
import { paymentMethod } from "../controllers/stripe.js";

const router = express.Router();

router.post("/payment", paymentMethod);

export default router;
