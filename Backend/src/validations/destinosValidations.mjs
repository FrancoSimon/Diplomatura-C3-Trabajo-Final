// src/validations/destinosValidations.mjs

import { body, param } from "express-validator";
import mongoose from "mongoose";

// ==============================
// VALIDACIÓN PARA CREAR DESTINO
// ==============================
export const crearDestinoValidation = [
  body("nombre")
    .trim()
    .escape()
    .notEmpty().withMessage("El nombre es obligatorio.")
    .isLength({ min: 3, max: 120 }),

  body("categoria")
    .trim()
    .escape()
    .notEmpty().withMessage("La categoría es obligatoria.")
    .isLength({ min: 3, max: 50 }),

  body("descripcion")
    .trim()
    .escape()
    .notEmpty().withMessage("La descripción es obligatoria.")
    .isLength({ min: 10 }),

  body("imagenes")
    .optional()
    .isArray().withMessage("Las imágenes deben ser un array.")
    .custom((arr) => arr.every((url) => typeof url === "string")),

  body("ubicacion")
    .optional()
    .custom((value) => {
      if (!value) return true;
      if (typeof value !== "object") throw new Error("Ubicación debe ser un objeto.");
      if (value.lat && isNaN(value.lat)) throw new Error("Latitud inválida.");
      if (value.lng && isNaN(value.lng)) throw new Error("Longitud inválida.");
      return true;
    }),

  body("aptoNinios")
    .optional()
    .isBoolean()
    .toBoolean(),

  body("hospedajes")
    .optional()
    .isArray()
    .custom((ids) => ids.every((id) => mongoose.Types.ObjectId.isValid(id))),

  body("gastronomia")
    .optional()
    .isArray()
    .custom((ids) => ids.every((id) => mongoose.Types.ObjectId.isValid(id))),

  body("excursiones")
    .optional()
    .isArray()
    .custom((ids) => ids.every((id) => mongoose.Types.ObjectId.isValid(id))),
];

// ==============================
// VALIDAR ID (para GET, PUT, DELETE)
// ==============================
export const idDestinoValidation = [
  param("id")
    .notEmpty()
    .isMongoId().withMessage("ID inválido"),
];

// ==============================
// VALIDACIÓN PARA ACTUALIZAR DESTINO
// ==============================
export const actualizarDestinoValidation = [
  ...crearDestinoValidation, // reutilizamos todas las validaciones
];


