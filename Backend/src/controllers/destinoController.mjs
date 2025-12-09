// src/controllers/destinoController.mjs
import { destinoService } from "../services/destinoService.mjs";

export const destinoController = {
  crear: async (req, res, next) => {
    try {
      const destino = await destinoService.crearDestino(req.body);
      res.status(201).json(destino);
    } catch (error) {
      next(error);
    }
  },

  listar: async (req, res, next) => {
    try {
      const destinos = await destinoService.obtenerDestinos();
      res.json(destinos);
    } catch (error) {
      next(error);
    }
  },

  obtener: async (req, res, next) => {
    try {
      const destino = await destinoService.obtenerDestino(req.params.id);
      res.json(destino);
    } catch (error) {
      next(error);
    }
  },

  actualizar: async (req, res, next) => {
    try {
      const destino = await destinoService.actualizarDestino(
        req.params.id,
        req.body
      );
      res.json(destino);
    } catch (error) {
      next(error);
    }
  },

  eliminar: async (req, res, next) => {
    try {
      await destinoService.eliminarDestino(req.params.id);
      res.json({ message: "Destino eliminado correctamente" });
    } catch (error) {
      next(error);
    }
  },

  top: async (req, res, next) => {
    try {
      const destinos = await destinoService.obtenerDestinosTop();
      res.json(destinos);
    } catch (error) {
      next(error);
    }
  },
};
