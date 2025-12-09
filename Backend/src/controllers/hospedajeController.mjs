// src/controllers/hospedajeController.mjs
import { hospedajeService } from "../services/hospedajeService.mjs";

export const hospedajeController = {
  crear: async (req, res, next) => {
    try {
      const h = await hospedajeService.crear(req.body);
      res.status(201).json({ status: "ok", hospedaje: h });
    } catch (error) {
      next(error);
    }
  },

  listar: async (req, res, next) => {
    try {
      const lista = await hospedajeService.obtenerTodos();
      res.json({ status: "ok", hospedajes: lista });
    } catch (error) {
      next(error);
    }
  },

  obtener: async (req, res, next) => {
    try {
      const h = await hospedajeService.obtenerPorId(req.params.id);
      res.json({ status: "ok", hospedaje: h });
    } catch (error) {
      next(error);
    }
  },

  actualizar: async (req, res, next) => {
    try {
      const h = await hospedajeService.actualizar(req.params.id, req.body);
      res.json({ status: "ok", hospedaje: h });
    } catch (error) {
      next(error);
    }
  },

  eliminar: async (req, res, next) => {
    try {
      await hospedajeService.eliminar(req.params.id);
      res.json({ status: "ok", message: "Hospedaje eliminado" });
    } catch (error) {
      next(error);
    }
  },
};
