// src/repositories/calificacionRepository.mjs
import IRepository from "./IRepository.mjs";
import Calificacion from "../models/calificacionModel.mjs";

class CalificacionRepository extends IRepository {
  constructor() {
    super(Calificacion);
  }

  async obtenerPorEntidad(entidadId, tipo) {
    return await this.model
      .find({ entidadId, tipo })
      .populate("usuarioId", "nombre email");
  }

  async obtenerUna(usuarioId, entidadId, tipo) {
    return await this.model.findOne({ usuarioId, entidadId, tipo });
  }
}

export const calificacionRepository = new CalificacionRepository();
