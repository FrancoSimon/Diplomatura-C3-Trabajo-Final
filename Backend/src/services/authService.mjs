// src/services/authService.mjs
import Usuario from "../models/usuarioModel.mjs";
import generarJWT from "../utilities/generarJWT.mjs";
import { CustomError } from "../utilities/customError.mjs";

export async function registrarUsuario(datos) {
  const { nombre, email, password } = datos;

  // ¿Existe ya?
  const existe = await Usuario.findOne({ email });
  if (existe) {
    throw new CustomError("El email ya está registrado", 409); // conflict
  }

  const usuario = await Usuario.create({ nombre, email, password });
  return usuario;
}

export async function loginUsuario(email, password) {
  const usuario = await Usuario.findOne({ email });

  if (!usuario) throw new CustomError("Usuario no encontrado", 404);

  const passwordOK = await usuario.compararPassword(password);
  if (!passwordOK) throw new CustomError("Contraseña incorrecta", 401);

  const token = generarJWT(usuario._id);

  return {
    usuario: {
      id: usuario._id,
      nombre: usuario.nombre,
      email: usuario.email,
      rol: usuario.rol,
    },
    token,
  };
}
