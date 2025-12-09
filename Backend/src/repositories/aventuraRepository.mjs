// src/repositories/aventuraRepository.mjs
import IRepository from "./IRepository.mjs";
import Aventura from "../models/aventuraModel.mjs";

class AventuraRepository extends IRepository {
  constructor() {
    super(Aventura);
  }

  async obtenerPorId(id) {
    return await this.model
      .findById(id)
      .populate("usuarioId", "nombre email")
      .populate("destinos")
      .populate("hospedajes")
      .populate("gastronomia")
      .populate("excursiones");
  }

  async obtenerTodasPorUsuario(usuarioId) {
    return await this.model
      .find({ usuarioId })
      .populate("destinos")
      .sort({ createdAt: -1 });
  }
}

export default new AventuraRepository();
