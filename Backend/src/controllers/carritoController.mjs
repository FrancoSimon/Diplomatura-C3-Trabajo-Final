import { carritoService } from "../services/carritoService.mjs";

export const carritoController = {
  obtener: async (req, res, next) => {
    try {
      const carrito = await carritoService.obtenerCarrito(req.usuario.id);
      res.json({ status: "ok", carrito });
    } catch (e) {
      next(e);
    }
  },

  agregar: async (req, res, next) => {
    try {
      const { tipo, idItem } = req.body;
      const carrito = await carritoService.agregarItem(
        req.usuario.id,
        tipo,
        idItem
      );
      res.json({ status: "ok", carrito });
    } catch (e) {
      next(e);
    }
  },

  quitar: async (req, res, next) => {
    try {
      const { tipo, idItem } = req.body;
      const carrito = await carritoService.quitarItem(
        req.usuario.id,
        tipo,
        idItem
      );
      res.json({ status: "ok", carrito });
    } catch (e) {
      next(e);
    }
  },

  limpiar: async (req, res, next) => {
    try {
      const carrito = await carritoService.limpiarCarrito(req.usuario.id);
      res.json({ status: "ok", carrito });
    } catch (e) {
      next(e);
    }
  },

  confirmar: async (req, res, next) => {
    try {
      const aventura = await carritoService.confirmarCarrito(req.usuario.id);
      res.json({ status: "ok", aventura });
    } catch (e) {
      next(e);
    }
  },
};
