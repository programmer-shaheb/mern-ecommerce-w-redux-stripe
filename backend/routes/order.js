import express from "express";
import {
  deleteOrder,
  getAllOrder,
  getSingleOrder,
  newOrder,
  updateOrder,
  getMonthlyIncome,
} from "../controllers/order.js";
import {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/", verifyToken, newOrder);
router.put("/:id", verifyTokenAndAdmin, updateOrder);
router.delete("/:id", verifyTokenAndAdmin, deleteOrder);
router.get("/", verifyTokenAndAdmin, getAllOrder);
router.get("/find/:userId", verifyTokenAndAuthorization, getSingleOrder);
router.get("/income", verifyTokenAndAdmin, getMonthlyIncome);

export default router;
