// src/repositories/hospedajeRepository.mjs
import IRepository from "./IRepository.mjs";
import Hospedaje from "../models/hospedajeModel.mjs";

class HospedajeRepository extends IRepository {
  constructor() {
    super(Hospedaje);
  }
}

export const hospedajeRepository = new HospedajeRepository();
