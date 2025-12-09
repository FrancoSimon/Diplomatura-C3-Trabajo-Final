// src/routes/excursionRoutes.mjs
import { Router } from "express";
import { verificarToken } from "../middlewares/authMiddleware.mjs";
import { soloAdmin } from "../middlewares/adminMiddleware.mjs";
import { validarCampos } from "../middlewares/validationResult.mjs";

import {
  crearExcursionValidation,
  idExcursionValidation,
} from "../validations/excursionValidations.mjs";

import { excursionController } from "../controllers/excursionController.mjs";

const router = Router();

// Rutas públicas
router.get("/", excursionController.listar);
router.get(
  "/:id",
  idExcursionValidation,
  validarCampos,
  excursionController.obtener
);

// Rutas solo admin
router.post(
  "/",
  verificarToken,
  soloAdmin,
  crearExcursionValidation,
  validarCampos,
  excursionController.crear
);

router.put(
  "/:id",
  verificarToken,
  soloAdmin,
  idExcursionValidation,
  crearExcursionValidation,
  validarCampos,
  excursionController.actualizar
);

router.delete(
  "/:id",
  verificarToken,
  soloAdmin,
  idExcursionValidation,
  validarCampos,
  excursionController.eliminar
);

export default router;
