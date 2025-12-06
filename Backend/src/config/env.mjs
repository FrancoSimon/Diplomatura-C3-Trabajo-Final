//Este archivo solo carga dotenv en un lugar central
import dotenv from "dotenv";
dotenv.config({ path: "../.env" }); //agrego path porque el archivo .env esta en backend/.env 

console.log("ENV CARGADO:", process.env.MONGO_URI ? "OK" : "NO");