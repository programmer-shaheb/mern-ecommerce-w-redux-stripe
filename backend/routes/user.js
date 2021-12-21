import express from "express";
import {
  deleteUser,
  getAllUser,
  getUserById,
  getUserStats,
  updateUser,
} from "../controllers/user.js";
import {
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} from "../middleware/verifyToken";

const router = express.Router();

router.put("/:id", verifyTokenAndAuthorization, updateUser);
router.delete("/:id", verifyTokenAndAuthorization, deleteUser);
router.get("/find/:id", verifyTokenAndAdmin, getUserById);
router.get("/", verifyTokenAndAdmin, getAllUser);
router.get("/stats", verifyTokenAndAdmin, getUserStats);

export default router;
