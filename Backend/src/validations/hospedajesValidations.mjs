// src/validations/hospedajesValidations.mjs
import { body, param } from "express-validator";

export const crearHospedajeValidation = [
  body("nombre")
    .notEmpty()
    .withMessage("El nombre es obligatorio")
    .isLength({ min: 3 }),

  body("tipo")
    .optional()
    .isIn(["hotel", "hostal", "cabaña", "camping", "otro"])
    .withMessage("Tipo inválido"),

  body("descripcion").notEmpty().withMessage("La descripción es obligatoria"),

  body("direccion").notEmpty().withMessage("La dirección es obligatoria"),

  body("telefono").optional().isString(),

  body("imagenes").optional().isArray(),

  body("servicios").optional().isArray(),

  body("precioNoche")
    .optional()
    .isNumeric()
    .withMessage("El precio debe ser numérico"),

  body("ubicacion")
    .optional()
    .custom((value) => {
      if (!value) return true;
      if (typeof value !== "object") throw new Error("ubicacion inválida");
      return true;
    }),
];

export const idHospedajeValidation = [
  param("id").isMongoId().withMessage("ID inválido de hospedaje"),
];
