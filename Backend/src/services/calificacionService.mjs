// src/services/calificacionService.mjs
import { calificacionRepository } from "../repositories/calificacionRepository.mjs";
import { CustomError } from "../utilities/customError.mjs";
import { actualizarRating } from "../utilities/ratingUtils.mjs";

export const calificacionService = {
  crearOActualizar: async (usuarioId, body) => {
    const { entidadId, tipo, puntuacion, comentario } = body;

    let calificacion = await calificacionRepository.obtenerUna(
      usuarioId,
      entidadId,
      tipo
    );

    if (calificacion) {
      // Actualizar
      calificacion.puntuacion = puntuacion;
      calificacion.comentario = comentario;
      await calificacion.save();
    } else {
      // Crear nueva
      calificacion = await calificacionRepository.crear({
        usuarioId,
        entidadId,
        tipo,
        puntuacion,
        comentario,
      });
    }

    await actualizarRating(entidadId, tipo);

    return calificacion;
  },

  obtenerPorEntidad: async (entidadId, tipo) => {
    return await calificacionRepository.obtenerPorEntidad(entidadId, tipo);
  },

  eliminar: async (usuarioId, entidadId, tipo) => {
    const eliminado = await calificacionRepository.model.findOneAndDelete({
      usuarioId,
      entidadId,
      tipo,
    });

    if (!eliminado) throw new CustomError("Calificación no encontrada", 404);

    await actualizarRating(entidadId, tipo);
  },
};
