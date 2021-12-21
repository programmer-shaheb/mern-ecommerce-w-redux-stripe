import express from "express";
import { register, signIn } from "../controllers/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", signIn);

export default router;
