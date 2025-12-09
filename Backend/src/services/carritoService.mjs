import Usuario from "../models/usuarioModel.mjs";
import { crearAventura } from "./aventuraService.mjs";

export const carritoService = {
  obtenerCarrito: async (usuarioId) => {
    return await Usuario.findById(usuarioId)
      .select("carrito")
      .populate("carrito.destinos")
      .populate("carrito.hospedajes")
      .populate("carrito.gastronomia")
      .populate("carrito.excursiones");
  },

  agregarItem: async (usuarioId, tipo, idItem) => {
    const usuario = await Usuario.findById(usuarioId);
    usuario.carrito[tipo].push(idItem);
    await usuario.save();
    return usuario.carrito;
  },

  quitarItem: async (usuarioId, tipo, idItem) => {
    const usuario = await Usuario.findById(usuarioId);
    usuario.carrito[tipo] = usuario.carrito[tipo].filter(
      (id) => id.toString() !== idItem
    );
    await usuario.save();
    return usuario.carrito;
  },

  limpiarCarrito: async (usuarioId) => {
    const usuario = await Usuario.findById(usuarioId);
    usuario.carrito = {
      destinos: [],
      hospedajes: [],
      gastronomia: [],
      excursiones: [],
      fechaViaje: null,
      presupuesto: 0,
    };
    await usuario.save();
    return usuario.carrito;
  },

  confirmarCarrito: async (usuarioId) => {
    const usuario = await Usuario.findById(usuarioId);

    const aventura = await crearAventura(
      {
        titulo: "Aventura desde carrito",
        destinos: usuario.carrito.destinos,
        hospedajes: usuario.carrito.hospedajes,
        gastronomia: usuario.carrito.gastronomia,
        excursiones: usuario.carrito.excursiones,
        fechaViaje: usuario.carrito.fechaViaje,
        presupuesto: usuario.carrito.presupuesto,
      },
      usuarioId
    );

    usuario.carrito = {
      destinos: [],
      hospedajes: [],
      gastronomia: [],
      excursiones: [],
      fechaViaje: null,
      presupuesto: 0,
    };

    await usuario.save();

    return aventura;
  },
};
