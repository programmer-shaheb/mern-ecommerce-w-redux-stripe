import express from "express";

const router = express.Router();

router.post("/", () => {});
router.put("/:id", () => {});
router.delete("/:id", () => {});
router.get("/", () => {});
router.get("/find/:id", () => {});

export default router;
