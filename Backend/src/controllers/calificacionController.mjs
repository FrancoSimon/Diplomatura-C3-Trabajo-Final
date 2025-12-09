// src/controllers/calificacionController.mjs
import { calificacionService } from "../services/calificacionService.mjs";

export const calificacionController = {
  crearOActualizar: async (req, res, next) => {
    try {
      const data = await calificacionService.crearOActualizar(
        req.usuario.id,
        req.body
      );

      res.status(201).json({ status: "ok", calificacion: data });
    } catch (error) {
      next(error);
    }
  },

  obtenerPorEntidad: async (req, res, next) => {
    try {
      const { entidadId, tipo } = req.params;
      const data = await calificacionService.obtenerPorEntidad(entidadId, tipo);

      res.json({ status: "ok", calificaciones: data });
    } catch (error) {
      next(error);
    }
  },

  eliminar: async (req, res, next) => {
    try {
      const { entidadId, tipo } = req.body;

      await calificacionService.eliminar(req.usuario.id, entidadId, tipo);

      res.json({ status: "ok", message: "Calificación eliminada" });
    } catch (error) {
      next(error);
    }
  },
};
