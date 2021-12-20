import express from "express";

const router = express.Router();

router.post("/", () => {});
router.put("/:id", () => {});
router.delete("/:id", () => {});
router.get("/", () => {});
router.get("/find/:userId", () => {});
router.get("/income", () => {});

export default router;
