import aventuraRepository from "../repositories/aventuraRepository.mjs";

// Crear aventura
export async function crearAventura(data, usuarioId) {
  return await aventuraRepository.crear({
    ...data,
    usuarioId
  });
}

// Listar aventuras del usuario
export async function obtenerAventurasUsuario(usuarioId) {
  return await aventuraRepository.obtenerTodasPorUsuario(usuarioId);
}

// Obtener una aventura por ID
export async function obtenerAventuraPorId(id) {
  return await aventuraRepository.obtenerPorId(id);
}

// Actualizar aventura
export async function actualizarAventura(id, data) {
  return await aventuraRepository.actualizar(id, data);
}

// Eliminar aventura
export async function eliminarAventura(id) {
  return await aventuraRepository.eliminar(id);
}

