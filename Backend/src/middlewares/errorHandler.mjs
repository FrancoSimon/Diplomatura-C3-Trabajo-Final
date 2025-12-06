// src/middlewares/errorHandler.mjs

export const errorHandler = (err, req, res, next) => {
  console.error("🔥 ERROR:", err);

  // Error con status definido
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    status: "error",
    message: err.message || "Error interno del servidor",
    // En producción esto debería omitirse
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
  });
};
