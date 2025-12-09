// src/services/hospedajeService.mjs
import { hospedajeRepository } from "../repositories/hospedajeRepository.mjs";
import { CustomError } from "../utilities/customError.mjs";

export const hospedajeService = {
  crear: async (data) => {
    return await hospedajeRepository.crear(data);
  },

  obtenerTodos: async () => {
    return await hospedajeRepository.obtenerTodos();
  },

  obtenerPorId: async (id) => {
    const h = await hospedajeRepository.obtenerPorId(id);
    if (!h) throw new CustomError("Hospedaje no encontrado", 404);
    return h;
  },

  actualizar: async (id, data) => {
    const h = await hospedajeRepository.actualizar(id, data);
    if (!h) throw new CustomError("Hospedaje no encontrado", 404);
    return h;
  },

  eliminar: async (id) => {
    const eliminado = await hospedajeRepository.eliminar(id);
    if (!eliminado) throw new CustomError("Hospedaje no encontrado", 404);
    return eliminado;
  },
};
