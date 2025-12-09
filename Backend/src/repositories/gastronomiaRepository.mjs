// src/repositories/gastronomiaRepository.mjs
//no necesitas sobrescribir crear/obtener/actualizar/eliminar porque el repositorio base los provee.
import IRepository from "./IRepository.mjs";
import Gastronomia from "../models/gastronomiaModel.mjs";

class GastronomiaRepository extends IRepository {
  constructor() {
    super(Gastronomia); // ✔ CORRECTO
  }
}

export const gastronomiaRepository = new GastronomiaRepository();

