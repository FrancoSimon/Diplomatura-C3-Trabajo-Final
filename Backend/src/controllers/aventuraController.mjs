// src/controllers/aventuraController.mjs
import {
  crearAventura,
  obtenerAventurasUsuario,
  obtenerAventuraPorId,
  actualizarAventura,
  eliminarAventura,
} from "../services/aventuraService.mjs";

export const aventuraController = {
  crear: async (req, res, next) => {
    try {
      const aventura = await crearAventura(req.body, req.usuario.id);
      res.status(201).json({ status: "ok", aventura });
    } catch (error) {
      next(error);
    }
  },

  listarUsuario: async (req, res, next) => {
    try {
      const lista = await obtenerAventurasUsuario(req.usuario.id);
      res.json({ status: "ok", aventuras: lista });
    } catch (error) {
      next(error);
    }
  },

  obtenerPorId: async (req, res, next) => {
    try {
      const aventura = await obtenerAventuraPorId(req.params.id);
      res.json({ status: "ok", aventura });
    } catch (error) {
      next(error);
    }
  },

  actualizar: async (req, res, next) => {
    try {
      const aventura = await actualizarAventura(req.params.id, req.body);
      res.json({ status: "ok", aventura });
    } catch (error) {
      next(error);
    }
  },

  eliminar: async (req, res, next) => {
    try {
      await eliminarAventura(req.params.id);
      res.json({ status: "ok", message: "Aventura eliminada" });
    } catch (error) {
      next(error);
    }
  },
};
