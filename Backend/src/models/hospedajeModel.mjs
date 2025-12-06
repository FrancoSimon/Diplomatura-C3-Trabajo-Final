import mongoose from "mongoose";

const hospedajeSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    categoria: {
      type: String,
      enum: ["hotel", "cabaña", "hostel", "familia"],
      required: true,
    },
    descripcion: String,
    direccion: String,
    telefono: String,
    imagenes: [String],
  },
  { timestamps: true }
);

const hospedajes = mongoose.model("Hospedaje", hospedajeSchema);
export default hospedajes;
