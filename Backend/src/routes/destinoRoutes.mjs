// src/routes/destinoRoutes.mjs
import { Router } from "express";
import { verificarToken } from "../middlewares/authMiddleware.mjs";
import { soloAdmin } from "../middlewares/adminMiddleware.mjs";

import {
  crearDestinoValidation,
  actualizarDestinoValidation,
  idDestinoValidation,
} from "../validations/destinosValidations.mjs";

import { validarCampos } from "../middlewares/validationResult.mjs";

import { destinoController } from "../controllers/destinoController.mjs";

const router = Router();

// =====================
//   RUTAS PÚBLICAS
// =====================

// Listar todos los destinos
router.get("/", destinoController.listar);

// Obtener destino por ID
router.get(
  "/:id",
  idDestinoValidation,
  validarCampos,
  destinoController.obtener
);

// Obtener TOP destinos
router.get("/top/listado", destinoController.top);

// =====================
//   RUTAS SOLO ADMIN
// =====================

// Crear destino
router.post(
  "/",
  verificarToken,
  soloAdmin,
  crearDestinoValidation,
  validarCampos,
  destinoController.crear
);

// Actualizar destino
router.put(
  "/:id",
  verificarToken,
  soloAdmin,
  idDestinoValidation,
  actualizarDestinoValidation,
  validarCampos,
  destinoController.actualizar
);

// Eliminar destino
router.delete(
  "/:id",
  verificarToken,
  soloAdmin,
  idDestinoValidation,
  validarCampos,
  destinoController.eliminar
);

export default router;
