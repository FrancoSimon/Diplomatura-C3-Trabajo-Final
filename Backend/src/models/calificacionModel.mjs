// src/models/calificacionModel.mjs
import mongoose from "mongoose";

const calificacionSchema = new mongoose.Schema(
  {
    usuarioId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario",
      required: true,
    },
    entidadId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    tipo: {
      type: String,
      enum: ["Destino", "Hospedaje", "Gastronomia", "Excursion"],
      required: true,
    },
    puntuacion: { type: Number, min: 1, max: 5, required: true },
    comentario: { type: String },
  },
  { timestamps: true }
);

// Evita calificaciones duplicadas del mismo usuario
calificacionSchema.index({ usuarioId: 1, entidadId: 1, tipo: 1 }, { unique: true });

const Calificacion = mongoose.model("Calificacion", calificacionSchema);
export default Calificacion;
