import { Router } from "express";
import authRoutes from "./authRoutes.mjs";

const router = Router();

router.use("/auth", authRoutes);

router.get("/", (req, res) => {
  res.json({ message: "API Turismo Fiambalá OK" });
});

export default router;
