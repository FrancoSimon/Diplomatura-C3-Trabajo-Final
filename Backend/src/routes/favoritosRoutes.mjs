// src/routes/favoritosRoutes.mjs
import { Router } from "express";
import { verificarToken } from "../middlewares/authMiddleware.mjs";
import { validarCampos } from "../middlewares/validationResult.mjs";
import {
  agregarFavoritoValidation,
  quitarFavoritoValidation,
} from "../validations/favoritosValidations.mjs";

import { favoritosController } from "../controllers/favoritosController.mjs";

const router = Router();

// Todas las rutas requieren login
router.use(verificarToken);//ver---

// Obtener lista de favoritos
router.get("/", favoritosController.listar);

// Agregar favorito
router.post(
  "/",
  agregarFavoritoValidation,
  validarCampos,
  favoritosController.agregar
);

// Quitar favorito
router.delete(
  "/:destinoId",
  quitarFavoritoValidation,
  validarCampos,
  favoritosController.quitar
);

export default router;
