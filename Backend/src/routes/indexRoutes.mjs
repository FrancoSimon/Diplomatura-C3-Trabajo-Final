// src/routes/indexRoutes.mjs
import { Router } from "express";

// Rutas de cada módulo
import authRoutes from "./authRoutes.mjs";
import destinoRoutes from "./destinoRoutes.mjs";
import aventuraRoutes from "./aventuraRoutes.mjs";
import hospedajeRoutes from "./hospedajeRoutes.mjs";
import gastronomiaRoutes from "./gastronomiaRoutes.mjs";
import excursionRoutes from "./excursionRoutes.mjs";
import calificacionRoutes from "./calificacionRoutes.mjs";
import favoritosRoutes from "./favoritosRoutes.mjs";
import carritoRoutes from "./carritoRoutes.mjs";

// Middlewares globales
import { errorHandler } from "../middlewares/errorHandler.mjs";

const router = Router();

// -------------------------------
// 📌 Rutas públicas
// -------------------------------
router.use("/auth", authRoutes);

// -------------------------------
// 📌 Rutas protegidas por token
// -------------------------------
router.use("/destinos", destinoRoutes);
router.use("/aventuras", aventuraRoutes);
router.use("/hospedajes", hospedajeRoutes);
router.use("/gastronomia", gastronomiaRoutes);
router.use("/excursiones", excursionRoutes);
router.use("/calificaciones", calificacionRoutes);
router.use("/favoritos", favoritosRoutes);
router.use("/carrito", carritoRoutes);

// -------------------------------
// 📌 Ruta base
// -------------------------------
router.get("/", (req, res) => {
  res.json({
    status: "OK",
    message: "API Turismo Fiambalá funcionando correctamente",
  });
});

// -------------------------------
// ⚠️ Middleware global de manejo de errores
// -------------------------------
router.use(errorHandler);

export default router;
