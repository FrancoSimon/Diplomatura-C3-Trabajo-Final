// src/repositories/IRepository.mjs

export default class IRepository {
  constructor(model) {
    if (!model) {
      throw new Error("Model is required in Repository");
    }
    this.model = model;
  }

  async crear(data) {
    return await this.model.create(data);
  }

  async obtenerTodos() {
    return await this.model.find();
  }

  async obtenerPorId(id) {
    return await this.model.findById(id);
  }

  async buscarPorAtributo(atributo, valor) {
    return await this.model.find({ [atributo]: valor });
  }

  async actualizar(id, data) {
    return await this.model.findByIdAndUpdate(id, data, { new: true });
  }

  async eliminar(id) {
    return await this.model.findByIdAndDelete(id);
  }
}
