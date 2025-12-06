// iniciar el backend
import "./config/env.mjs";
import express from "express";
import cors from "cors";
import morgan from "morgan";

// Cargar variables de entorno
import "./config/env.mjs";

// Conexión a Base de Datos
import { connectDB } from "./config/dbconfig.mjs";

// Rutas centrales (las crearemos después)
import indexRoutes from "./routes/indexRoutes.mjs";
import { errorHandler } from "./middlewares/errorHandler.mjs";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Conectar DB
connectDB();

// Rutas
app.use("/api", indexRoutes);

// Middleware global para manejar errores
app.use(errorHandler);

export default app;
