import { Router } from "express";
import { verificarToken } from "../middlewares/authMiddleware.mjs";
import { soloAdmin } from "../middlewares/adminMiddleware.mjs";

import {
  crearGastronomiaValidation,
  actualizarGastronomiaValidation,
  idGastronomiaValidation,
} from "../validations/gastronomiaValidations.mjs";

import { validarCampos } from "../middlewares/validationResult.mjs";
import { gastronomiaController } from "../controllers/gastronomiaController.mjs";

const router = Router();

// Público
router.get("/", gastronomiaController.listar);

router.get(
  "/:id",
  idGastronomiaValidation,
  validarCampos,
  gastronomiaController.obtener
);

// Admin
router.post(
  "/",
  verificarToken,
  soloAdmin,
  crearGastronomiaValidation,
  validarCampos,
  gastronomiaController.crear
);

router.put(
  "/:id",
  verificarToken,
  soloAdmin,
  idGastronomiaValidation,
  actualizarGastronomiaValidation,
  validarCampos,
  gastronomiaController.actualizar
);

router.delete(
  "/:id",
  verificarToken,
  soloAdmin,
  idGastronomiaValidation,
  validarCampos,
  gastronomiaController.eliminar
);

export default router;
