// src/middlewares/authMiddleware.mjs
import jwt from "jsonwebtoken";
import Usuario from "../models/usuarioModel.mjs";

export const verificarToken = async (req, res, next) => {
  let token = req.headers.authorization;

  // No llego token
  if (!token) {
    return res.status(401).json({ error: "Acceso denegado. Falta token." });
  }

  // Token viene como: "Bearer eyJhbGciOi..."
  if (token.startsWith("Bearer ")) {
    token = token.split(" ")[1];
  }

  try {
    // Verificar token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Guardar usuario en req
    const usuario = await Usuario.findById(decoded.id).select("-password");
    if (!usuario) {
      return res
        .status(401)
        .json({ error: "Token inválido: usuario no existe" });
    }

    req.usuario = usuario;

    next();
  } catch (error) {
    return res.status(401).json({ error: "Token inválido o expirado" });
  }
};

//por roles Middleware para validar ADMIN
export const soloAdmin = (req, res, next) => {
  if (req.usuario?.rol !== "admin") {
    return res
      .status(403)
      .json({ error: "Acción permitida solo para administradores" });
  }
  next();
};
