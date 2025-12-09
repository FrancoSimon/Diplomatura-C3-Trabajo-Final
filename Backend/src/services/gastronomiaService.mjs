import { gastronomiaRepository } from "../repositories/gastronomiaRepository.mjs";
import { CustomError } from "../utilities/customError.mjs";

export const gastronomiaService = {
  crear: async (data) => {
    return await gastronomiaRepository.crear(data);
  },

  listar: async () => {
    return await gastronomiaRepository.obtenerTodos();
  },

  obtener: async (id) => {
    const item = await gastronomiaRepository.obtenerPorId(id);
    if (!item) throw new CustomError("Gastronomía no encontrada", 404);
    return item;
  },

  actualizar: async (id, data) => {
    const item = await gastronomiaRepository.actualizar(id, data);
    if (!item) throw new CustomError("Gastronomía no encontrada", 404);
    return item;
  },

  eliminar: async (id) => {
    const eliminado = await gastronomiaRepository.eliminar(id);
    if (!eliminado) throw new CustomError("Gastronomía no encontrada", 404);
    return eliminado;
  },
};
