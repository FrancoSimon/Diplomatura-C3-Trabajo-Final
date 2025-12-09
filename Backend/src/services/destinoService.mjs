// src/services/destinoService.mjs
import { destinoRepository } from "../repositories/destinoRepository.mjs";
import { CustomError } from "../utilities/customError.mjs";

export const destinoService = {
  
  crearDestino: async (data) => {
    return await destinoRepository.crear(data);
  },

  obtenerDestinos: async () => {
    return await destinoRepository.obtenerTodos();   // 🔹 CORREGIDO
  },

  obtenerDestino: async (id) => {
    const destino = await destinoRepository.obtenerPorId(id); // 🔹 MÁS COHERENTE
    if (!destino) throw new CustomError("Destino no encontrado", 404);
    return destino;
  },

  actualizarDestino: async (id, data) => {
    const destino = await destinoRepository.actualizar(id, data);
    if (!destino) throw new CustomError("Destino no encontrado", 404);
    return destino;
  },

  eliminarDestino: async (id) => {
    const eliminado = await destinoRepository.eliminar(id);
    if (!eliminado) throw new CustomError("Destino no encontrado", 404);
    return eliminado;
  },

  obtenerDestinosTop: async () => {
    return await destinoRepository.destinosTop(6);
  },
};
