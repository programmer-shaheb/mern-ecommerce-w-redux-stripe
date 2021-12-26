import express from "express";
import {
  deleteCartProduct,
  getAllCartProduct,
  getSingleCartProduct,
  newCartProduct,
  updateCart,
} from "../controllers/cart.js";
import {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/", verifyToken, newCartProduct);
router.put("/:id", verifyTokenAndAuthorization, updateCart);
router.delete("/:id", verifyTokenAndAuthorization, deleteCartProduct);
router.get("/", verifyTokenAndAdmin, getAllCartProduct);
router.get("/find/:id", verifyTokenAndAuthorization, getSingleCartProduct);

export default router;
