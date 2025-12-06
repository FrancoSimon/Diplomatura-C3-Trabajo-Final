// conectar con base de datos
//Uso de variables de entorno y dbName
import mongoose from "mongoose";

export async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: process.env.DB_NAME || "turismo_fiambala",
    });

    console.log("✅ Conexión exitosa a MongoDB");
  } catch (error) {
    console.error("❌ Error al conectar a MongoDB:", error.message);
    process.exit(1);
  }
}

console.log("DEBUG MONGO_URI:", process.env.MONGO_URI);