import mongoose from "mongoose";

const destinoSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    categoria: { type: String, required: true },
    descripcion: { type: String, required: true },
    imagenes: [String],

    ubicacion: {
      lat: Number,
      lng: Number,
    },

    aptoNinios: { type: Boolean, default: true },

    hospedajes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Hospedaje" }],
    gastronomia: [{ type: mongoose.Schema.Types.ObjectId, ref: "Gastronomia" }],
    excursiones: [{ type: mongoose.Schema.Types.ObjectId, ref: "Excursion" }],

    // ✔ Campos correctos de clasificación
    rating: { type: Number, default: 0 },
    ratingCount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const destinos = mongoose.model("Destino", destinoSchema);
export default destinos;
