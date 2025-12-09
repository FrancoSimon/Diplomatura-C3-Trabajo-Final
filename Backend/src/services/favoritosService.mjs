// src/services/favoritosService.mjs
import Usuario from "../models/usuarioModel.mjs";
import Destino from "../models/destinoModel.mjs";
import { CustomError } from "../utilities/customError.mjs";

export const favoritosService = {
  agregar: async (usuarioId, destinoId) => {
    const destino = await Destino.findById(destinoId);
    if (!destino) throw new CustomError("Destino no encontrado", 404);

    const usuario = await Usuario.findById(usuarioId);

    if (usuario.favoritos.includes(destinoId)) {
      throw new CustomError("El destino ya está en favoritos", 400);
    }

    usuario.favoritos.push(destinoId);
    await usuario.save();

    return await usuario.populate("favoritos");
  },

  quitar: async (usuarioId, destinoId) => {
    const usuario = await Usuario.findById(usuarioId);

    if (!usuario.favoritos.includes(destinoId)) {
      throw new CustomError("El destino no está en favoritos", 400);
    }

    usuario.favoritos = usuario.favoritos.filter(
      (fav) => fav.toString() !== destinoId
    );

    await usuario.save();

    return await usuario.populate("favoritos");
  },

  listar: async (usuarioId) => {
    const usuario = await Usuario.findById(usuarioId).populate("favoritos");
    return usuario.favoritos;
  },
};
