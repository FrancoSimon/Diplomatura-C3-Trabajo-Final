// src/validations/aventurasValidations.mjs
import { body, param } from "express-validator";

export const crearAventuraValidation = [
  body("titulo")
    .notEmpty()
    .withMessage("El título es obligatorio")
    .isLength({ min: 3, max: 60 }),

  body("destinos")
    .optional()
    .isArray()
    .withMessage("destinos debe ser un array"),
  body("hospedajes").optional().isArray(),
  body("gastronomia").optional().isArray(),
  body("excursiones").optional().isArray(),

  body("presupuesto")
    .optional()
    .isNumeric()
    .withMessage("El presupuesto debe ser numérico"),

  body("fechaViaje")
    .optional()
    .isISO8601()
    .withMessage("fechaViaje debe tener formato válido"),
];

export const idAventuraValidation = [
  param("id").isMongoId().withMessage("ID inválido de aventura"),
];

export const actualizarAventuraValidation = [
  body("titulo")
    .optional()
    .isLength({ min: 3, max: 60 })
    .withMessage("El título debe tener entre 3 y 60 caracteres"),

  body("destinos").optional().isArray(),
  body("hospedajes").optional().isArray(),
  body("gastronomia").optional().isArray(),
  body("excursiones").optional().isArray(),

  body("presupuesto").optional().isNumeric(),

  body("fechaViaje")
    .optional()
    .isISO8601()
    .withMessage("Formato de fecha inválido"),
];
