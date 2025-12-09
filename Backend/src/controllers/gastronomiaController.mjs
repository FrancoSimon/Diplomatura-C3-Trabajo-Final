import { gastronomiaService } from "../services/gastronomiaService.mjs";

export const gastronomiaController = {
  crear: async (req, res, next) => {
    try {
      const nuevo = await gastronomiaService.crear(req.body);
      res.status(201).json({ status: "ok", gastronomia: nuevo });
    } catch (error) {
      next(error);
    }
  },

  listar: async (req, res, next) => {
    try {
      const lista = await gastronomiaService.listar();
      res.json({ status: "ok", gastronomias: lista });
    } catch (error) {
      next(error);
    }
  },

  obtener: async (req, res, next) => {
    try {
      const item = await gastronomiaService.obtener(req.params.id);
      res.json({ status: "ok", gastronomia: item });
    } catch (error) {
      next(error);
    }
  },

  actualizar: async (req, res, next) => {
    try {
      const actualizado = await gastronomiaService.actualizar(
        req.params.id,
        req.body
      );
      res.json({ status: "ok", gastronomia: actualizado });
    } catch (error) {
      next(error);
    }
  },

  eliminar: async (req, res, next) => {
    try {
      await gastronomiaService.eliminar(req.params.id);
      res.json({ status: "ok", message: "Gastronomía eliminada" });
    } catch (error) {
      next(error);
    }
  },
};
