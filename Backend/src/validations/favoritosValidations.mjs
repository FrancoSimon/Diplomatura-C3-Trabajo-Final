// src/validations/favoritosValidations.mjs
import { body, param } from "express-validator";

export const agregarFavoritoValidation = [
  body("destinoId").notEmpty().isMongoId().withMessage("ID de destino inválido"),
];

export const quitarFavoritoValidation = [
  param("destinoId").notEmpty().isMongoId().withMessage("ID de destino inválido"),
];
