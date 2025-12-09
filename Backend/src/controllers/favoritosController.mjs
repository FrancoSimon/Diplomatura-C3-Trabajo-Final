// src/controllers/favoritosController.mjs
import { favoritosService } from "../services/favoritosService.mjs";

export const favoritosController = {
  agregar: async (req, res, next) => {
    try {
      const data = await favoritosService.agregar(
        req.usuario.id,
        req.body.destinoId
      );

      res.json({ status: "ok", favoritos: data.favoritos });
    } catch (error) {
      next(error);
    }
  },

  quitar: async (req, res, next) => {
    try {
      const data = await favoritosService.quitar(
        req.usuario.id,
        req.params.destinoId
      );

      res.json({ status: "ok", favoritos: data.favoritos });
    } catch (error) {
      next(error);
    }
  },

  listar: async (req, res, next) => {
    try {
      const favoritos = await favoritosService.listar(req.usuario.id);
      res.json({ status: "ok", favoritos });
    } catch (error) {
      next(error);
    }
  },
};
