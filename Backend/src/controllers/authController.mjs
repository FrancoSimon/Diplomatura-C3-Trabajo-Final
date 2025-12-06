import { registrarUsuario, loginUsuario } from "../services/authService.mjs";

export const authController = {
  registro: async (req, res) => {
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
      res.status(400).json({ error: error.message });
    }
  },

  login: async (req, res) => {
    try {
      const { usuario, token } = await loginUsuario(
        req.body.email,
        req.body.password
      );

      res.json({ usuario, token });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};
