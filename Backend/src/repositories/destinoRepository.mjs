// src/repositories/destinoRepository.mjs
//el repositorio base funciona, tu repositorio concreto solo agrega métodos específicos.
import IRepository from "./IRepository.mjs";
import Destino from "../models/destinoModel.mjs";

class DestinoRepository extends IRepository {
  constructor() {
    super(Destino);
  }

  async obtenerConAsociaciones(id) {
    return await this.model
      .findById(id)
      .populate("hospedajes")
      .populate("gastronomia")
      .populate("excursiones");
  }

  async destinosTop(limit = 5) {
    return await this.model.find().sort({ rating: -1 }).limit(limit);
  }
}

export const destinoRepository = new DestinoRepository();
