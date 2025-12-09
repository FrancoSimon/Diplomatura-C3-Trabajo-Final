// src/validations/excursionValidations.mjs
import { body, param } from "express-validator";
import mongoose from "mongoose";

export const crearExcursionValidation = [
  body("nombre")
    .notEmpty()
    .withMessage("El nombre es obligatorio")
    .isLength({ min: 3 }),

  body("categoria")
    .notEmpty()
    .withMessage("La categoría es obligatoria"),

  body("descripcion").optional().isString(),

  body("duracion").optional().isString(),

  body("precio")
    .optional()
    .isNumeric()
    .withMessage("El precio debe ser numérico"),

  body("imagenes")
    .optional()
    .isArray()
    .withMessage("Las imágenes deben ser un array")
    .custom(arr => arr.every(url => typeof url === "string")),
];

export const idExcursionValidation = [
  param("id")
    .notEmpty()
    .isMongoId()
    .withMessage("ID de excursión inválido"),
];
