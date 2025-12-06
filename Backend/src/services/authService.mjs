import Usuario from "../models/usuarioModel.mjs";
import generarJWT from "../utilities/generarJWT.mjs";

export async function registrarUsuario(datos) {
  const { nombre, email, password } = datos;

  // ¿Existe ya?
  const existe = await Usuario.findOne({ email });
  if (existe) {
    throw new Error("El email ya está registrado");
  }

  const usuario = await Usuario.create({ nombre, email, password });
  return usuario;
}

export async function loginUsuario(email, password) {
  const usuario = await Usuario.findOne({ email });

  if (!usuario) throw new Error("Usuario no encontrado");

  const passwordOK = await usuario.compararPassword(password);
  if (!passwordOK) throw new Error("Contraseña incorrecta");

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
