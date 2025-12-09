// src/routes/calificacionRoutes.mjs
import { Router } from "express";
import { verificarToken } from "../middlewares/authMiddleware.mjs";
import { validarCampos } from "../middlewares/validationResult.mjs";
import {
  crearCalificacionValidation,
  obtenerPorEntidadValidation,
} from "../validations/calificacionValidations.mjs";
import { calificacionController } from "../controllers/calificacionController.mjs";

const router = Router();

// Crear o actualizar calificación
router.post(
  "/",
  verificarToken,
  crearCalificacionValidation,
  validarCampos,
  calificacionController.crearOActualizar
);

// Listar calificaciones de una entidad
router.get(
  "/:entidadId/:tipo",
  obtenerPorEntidadValidation,
  validarCampos,
  calificacionController.obtenerPorEntidad
);

// Eliminar calificación del usuario
router.delete("/", verificarToken, calificacionController.eliminar);

export default router;
