
// src/controllers/authController.mjs
import { registrarUsuario, loginUsuario } from "../services/authService.mjs";

export const authController = {
  registro: async (req, res, next) => {
    try {
      const nuevoUsuario = await registrarUsuario(req.body);

      res.status(201).json({
        message: "Usuario registrado correctamente",
        usuario: {
          id: nuevoUsuario._id,
          nombre: nuevoUsuario.nombre,
          email: nuevoUsuario.email,
        },
      });
    } catch (error) {
      next(error); // ⬅ pasa al errorHandler
    }
  },

  login: async (req, res, next) => {
    try {
      const { usuario, token } = await loginUsuario(
        req.body.email,
        req.body.password
      );

      res.json({ usuario, token });
    } catch (error) {
      next(error); // ⬅ pasa al errorHandler
    }
  },
};
