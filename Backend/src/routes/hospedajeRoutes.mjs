// src/routes/hospedajeRoutes.mjs
import { Router } from "express";
import { validarCampos } from "../middlewares/validationResult.mjs";
import { verificarToken } from "../middlewares/authMiddleware.mjs";
import {
  crearHospedajeValidation,
  idHospedajeValidation,
} from "../validations/hospedajesValidations.mjs";

import { hospedajeController } from "../controllers/hospedajeController.mjs";

const router = Router();

router.use(verificarToken);

router.get("/", hospedajeController.listar);

router.get("/:id", idHospedajeValidation, validarCampos, hospedajeController.obtener);

router.post("/", crearHospedajeValidation, validarCampos, hospedajeController.crear);

router.put(
  "/:id",
  idHospedajeValidation,
  crearHospedajeValidation,
  validarCampos,
  hospedajeController.actualizar
);

router.delete(
  "/:id",
  idHospedajeValidation,
  validarCampos,
  hospedajeController.eliminar
);

export default router;
