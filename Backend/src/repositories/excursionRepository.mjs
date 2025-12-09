// src/repositories/excursionRepository.mjs
import IRepository from "./IRepository.mjs";
import Excursion from "../models/excursionModel.mjs";

class ExcursionRepository extends IRepository {
  constructor() {
    super(Excursion); // ✔ obligatorio
  }
}

export const excursionRepository = new ExcursionRepository();
