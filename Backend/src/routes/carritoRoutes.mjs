import { Router } from "express";
import { verificarToken } from "../middlewares/authMiddleware.mjs";
import { carritoController } from "../controllers/carritoController.mjs";

const router = Router();

router.use(verificarToken);

router.get("/", carritoController.obtener);
router.post("/agregar", carritoController.agregar);
router.post("/quitar", carritoController.quitar);
router.delete("/limpiar", carritoController.limpiar);
router.post("/confirmar", carritoController.confirmar);

export default router;
