import { Router } from "express";
import { authController } from "../controllers/authController.mjs";

const router = Router();

// POST api/auth/registro
router.post("/registro", authController.registro);

// POST api/auth/login
router.post("/login", authController.login);

export default router;
