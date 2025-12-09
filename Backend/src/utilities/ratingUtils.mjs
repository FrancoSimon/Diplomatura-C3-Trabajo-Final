// src/utilities/ratingUtils.mjs
//recalcular automáticamente el rating promedio.
import Destino from "../models/destinoModel.mjs";
import Hospedaje from "../models/hospedajeModel.mjs";
import Gastronomia from "../models/gastronomiaModel.mjs";
import Excursion from "../models/excursionModel.mjs";
import Calificacion from "../models/calificacionModel.mjs";

const modelos = {
  Destino,
  Hospedaje,
  Gastronomia,
  Excursion,
};

export async function actualizarRating(entidadId, tipo) {
  const modelo = modelos[tipo];
  if (!modelo) return;

  const calificaciones = await Calificacion.find({ entidadId, tipo });

  const ratingCount = calificaciones.length;
  const rating =
    ratingCount === 0
      ? 0
      : calificaciones.reduce((acc, c) => acc + c.puntuacion, 0) / ratingCount;

  await modelo.findByIdAndUpdate(entidadId, {
    rating: rating.toFixed(1),
    ratingCount,
  });
}
