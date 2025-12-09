// src/controllers/excursionController.mjs
import { excursionService } from "../services/excursionService.mjs";

export const excursionController = {
  crear: async (req, res, next) => {
    try {
      const data = await excursionService.crearExcursion(req.body);
      res.status(201).json({ status: "ok", data });
    } catch (error) {
      next(error);
    }
  },

  listar: async (req, res, next) => {
    try {
      const data = await excursionService.obtenerExcursiones();
      res.json({ status: "ok", data });
    } catch (error) {
      next(error);
    }
  },

  obtener: async (req, res, next) => {
    try {
      const data = await excursionService.obtenerExcursion(req.params.id);
      res.json({ status: "ok", data });
    } catch (error) {
      next(error);
    }
  },

  actualizar: async (req, res, next) => {
    try {
      const data = await excursionService.actualizarExcursion(
        req.params.id,
        req.body
      );
      res.json({ status: "ok", data });
    } catch (error) {
      next(error);
    }
  },

  eliminar: async (req, res, next) => {
    try {
      await excursionService.eliminarExcursion(req.params.id);
      res.json({ status: "ok", message: "Excursión eliminada" });
    } catch (error) {
      next(error);
    }
  },
};
