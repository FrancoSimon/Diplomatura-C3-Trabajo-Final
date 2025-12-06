import mongoose from "mongoose";

const gastronomiaSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    tipo: { type: String, required: true }, // regional, parrilla, cafetería...
    descripcion: String,
    direccion: String,
    telefono: String,
    imagenes: [String],
  },
  { timestamps: true }
);

const gastronomias=mongoose.model("Gastronomia", gastronomiaSchema)
export default gastronomias;
