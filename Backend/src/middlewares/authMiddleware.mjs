import jwt from "jsonwebtoken";
import Usuario from "../models/usuarioModel.mjs";

export default async function authMiddleware(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token)
    return res.status(401).json({ error: "No autorizado, falta token" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.usuario = await Usuario.findById(decoded.id).select("-password");
    next();
  } catch (error) {
    res.status(401).json({ error: "Token inválido" });
  }
}
