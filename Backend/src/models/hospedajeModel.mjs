// src/models/hospedajeModel.mjs
import mongoose from "mongoose";

const hospedajeSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true, trim: true },

    tipo: {
      type: String,
      enum: ["hotel", "hostal", "cabaña", "camping", "otro"],
      default: "hotel",
    },

    descripcion: { type: String, required: true },

    direccion: { type: String, required: true },

    telefono: { type: String },

    imagenes: [{ type: String }],

    servicios: [{ type: String }], // ejemplo: wifi, pileta, desayuno

    precioNoche: { type: Number },

    ubicacion: {
      lat: Number,
      lng: Number,
    },
  },
  { timestamps: true }
);

const Hospedaje = mongoose.model("Hospedaje", hospedajeSchema);
export default Hospedaje;
