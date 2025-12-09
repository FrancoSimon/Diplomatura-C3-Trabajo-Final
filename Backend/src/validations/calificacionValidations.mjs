// src/validations/calificacionValidations.mjs
import { body, param } from "express-validator";

export const crearCalificacionValidation = [
  body("entidadId").notEmpty().isMongoId(),
  body("tipo")
    .notEmpty()
    .isIn(["Destino", "Hospedaje", "Gastronomia", "Excursion"]),
  body("puntuacion").notEmpty().isInt({ min: 1, max: 5 }),
  body("comentario").optional().isString(),
];

export const obtenerPorEntidadValidation = [
  param("entidadId").notEmpty().isMongoId(),
  param("tipo")
    .notEmpty()
    .isIn(["Destino", "Hospedaje", "Gastronomia", "Excursion"]),
];
