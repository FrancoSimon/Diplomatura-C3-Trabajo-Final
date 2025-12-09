// src/routes/aventuraRoutes.mjs
import { Router } from "express";
import { verificarToken } from "../middlewares/authMiddleware.mjs";
import { validarCampos } from "../middlewares/validationResult.mjs";

import {
  actualizarAventuraValidation,
  crearAventuraValidation,
  idAventuraValidation
} from "../validations/aventurasValidations.mjs";

import { aventuraController } from "../controllers/aventuraController.mjs";

const router = Router();

// Todas las rutas requieren estar logueado
router.use(verificarToken);

// ==============================
//   RUTAS DE AVENTURAS
// ==============================

// Listar aventuras del usuario logueado
router.get("/", aventuraController.listarUsuario);

// Obtener una aventura por ID
router.get(
  "/:id",
  idAventuraValidation,
  validarCampos,
  aventuraController.obtenerPorId
);

// Crear aventura
router.post(
  "/",
  crearAventuraValidation,
  validarCampos,
  aventuraController.crear
);

// Actualizar aventura
router.put(
  "/:id",
  idAventuraValidation,
  actualizarAventuraValidation,
  validarCampos,
  aventuraController.actualizar
);

// Eliminar aventura
router.delete(
  "/:id",
  idAventuraValidation,
  validarCampos,
  aventuraController.eliminar
);

export default router;
