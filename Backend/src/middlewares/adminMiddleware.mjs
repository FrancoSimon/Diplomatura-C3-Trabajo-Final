// src/middlewares/adminMiddleware.mjs

export const soloAdmin = (req, res, next) => {
  // req.usuario se carga en verificarToken
  if (!req.usuario) {
    return res.status(401).json({ error: "Acceso denegado. Falta autenticación." });
  }

  if (req.usuario.rol !== "admin") {
    return res.status(403).json({ error: "Acción permitida solo para administradores." });
  }

  // Todo OK, continuar
  next();
};
