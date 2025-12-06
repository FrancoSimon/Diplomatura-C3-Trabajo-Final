// models/Clasificacion.js
import mongoose from "mongoose";
import Destino from "./destinoModel.mjs"; // ajusta la ruta según tu estructura

const clasificacionSchema = new mongoose.Schema(
  {
    usuario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario",
      required: true,
    },
    destino: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Destino",
      required: true,
    },
    puntuacion: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    comentario: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

// Índice único para que un usuario solo pueda puntuar un destino una vez
clasificacionSchema.index({ usuario: 1, destino: 1 }, { unique: true });

/**
 * Recalcular y guardar el rating promedio y cantidad de reseñas en Destino.
 * Usamos una función que hace un aggregate sobre Clasificacion para calcular promedio y contar.
 */
async function recalcularRating(destinoId) {
  if (!destinoId) return;

  const agg = await mongoose.model("Clasificacion").aggregate([
    { $match: { destino: destinoId } },
    {
      $group: {
        _id: "$destino",
        promedio: { $avg: "$puntuacion" },
        cantidad: { $sum: 1 },
      },
    },
  ]);

  if (agg.length === 0) {
    // No hay clasificaciones; dejar valores por defecto
    await Destino.findByIdAndUpdate(destinoId, { rating: 0, ratingCount: 0 });
  } else {
    const { promedio, cantidad } = agg[0];
    await Destino.findByIdAndUpdate(destinoId, {
      rating: Number(promedio.toFixed(2)),
      ratingCount: cantidad,
    });
  }
}

// Después de crear o actualizar una clasificacion -> recalcular
clasificacionSchema.post("save", async function () {
  try {
    await recalcularRating(this.destino);
  } catch (err) {
    console.error("Error recalculando rating (post save):", err);
  }
});

// Después de eliminar una clasificacion -> recalcular
clasificacionSchema.post("remove", async function () {
  try {
    await recalcularRating(this.destino);
  } catch (err) {
    console.error("Error recalculando rating (post remove):", err);
  }
});

// Si usas findOneAndDelete / findByIdAndDelete, los hooks post('remove') no se disparan;
// puedes usar post('findOneAndDelete') para cubrir esos casos:
clasificacionSchema.post("findOneAndDelete", async function (doc) {
  if (doc) {
    try {
      await recalcularRating(doc.destino);
    } catch (err) {
      console.error("Error recalculando rating (findOneAndDelete):", err);
    }
  }
});

const clasificaciones = mongoose.model("Clasificacion", clasificacionSchema);
export default clasificaciones;
