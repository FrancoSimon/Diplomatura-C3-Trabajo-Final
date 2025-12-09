import { body, param } from "express-validator";
import mongoose from "mongoose";

export const crearGastronomiaValidation = [
  body("nombre")
    .notEmpty()
    .withMessage("El nombre es obligatorio.")
    .isLength({ min: 3, max: 120 }),

  body("tipo")
    .notEmpty()
    .withMessage("El tipo es obligatorio.")
    .isLength({ min: 3, max: 50 }),

  body("descripcion").optional().isLength({ min: 5 }),

  body("direccion").optional().isString(),

  body("telefono").optional().isString(),

  body("imagenes")
    .optional()
    .isArray()
    .withMessage("imagenes debe ser un array.")
    .custom((arr) => arr.every((img) => typeof img === "string")),
];

export const actualizarGastronomiaValidation = [...crearGastronomiaValidation];

export const idGastronomiaValidation = [
  param("id").notEmpty().isMongoId().withMessage("ID inválido"),
];
