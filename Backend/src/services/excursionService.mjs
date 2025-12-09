// src/services/excursionService.mjs
import { excursionRepository } from "../repositories/excursionRepository.mjs";
import { CustomError } from "../utilities/customError.mjs";

export const excursionService = {
  crearExcursion: async (data) => {
    return await excursionRepository.crear(data);
  },

  obtenerExcursiones: async () => {
    return await excursionRepository.obtenerTodos();
  },

  obtenerExcursion: async (id) => {
    const excursion = await excursionRepository.obtenerPorId(id);
    if (!excursion) throw new CustomError("Excursión no encontrada", 404);
    return excursion;
  },

  actualizarExcursion: async (id, data) => {
    const excursion = await excursionRepository.actualizar(id, data);
    if (!excursion) throw new CustomError("Excursión no encontrada", 404);
    return excursion;
  },

  eliminarExcursion: async (id) => {
    const eliminado = await excursionRepository.eliminar(id);
    if (!eliminado) throw new CustomError("Excursión no encontrada", 404);
    return eliminado;
  },
};
