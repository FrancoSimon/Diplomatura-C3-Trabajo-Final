import mongoose from "mongoose";

const aventuraSchema = new mongoose.Schema(
  {
    usuarioId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario",
      required: true,
    },

    titulo: { type: String, required: true },

    destinos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Destino",
      },
    ],

    hospedajes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospedaje",
      },
    ],

    gastronomia: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Gastronomia",
      },
    ],

    excursiones: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Excursion",
      },
    ],

    notas: { type: String },
    presupuesto: { type: Number },
    fechaViaje: { type: Date },

    estado: {
      type: String,
      enum: ["borrador", "enviado"],
      default: "borrador",
    },
  },
  { timestamps: true }
);

const aventuras = mongoose.model("Aventura", aventuraSchema);
export default aventuras;
