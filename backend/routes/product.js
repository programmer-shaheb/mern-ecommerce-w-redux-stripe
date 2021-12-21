import express from "express";
import {
  deleteProduct,
  getAllProduct,
  getSingleProduct,
  newProduct,
  updateProduct,
} from "../controllers/product.js";
import { verifyTokenAndAdmin } from "../middleware/verifyToken";

const router = express.Router();

router.post("/", verifyTokenAndAdmin, newProduct);
router.put("/:id", verifyTokenAndAdmin, updateProduct);
router.delete("/:id", verifyTokenAndAdmin, deleteProduct);
router.get("/", getAllProduct);
router.get("/find/:id", getSingleProduct);

export default router;
