import mongoose from "mongoose";

const excursionSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    categoria: { type: String, required: true }, // trekking, sandboard, termas, volcanes...
    descripcion: String,
    duracion: String,
    precio: Number,
    imagenes: [String],
  },
  { timestamps: true }
);

const excursiones = mongoose.model("Excursion", excursionSchema);
export default excursiones;
