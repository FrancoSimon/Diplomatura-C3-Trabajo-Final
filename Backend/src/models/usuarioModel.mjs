// src/models/usuarioModel.mjs
import mongoose from "mongoose";
import bcrypt from "bcrypt";

const usuarioSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    rol: { type: String, enum: ["admin", "turista"], default: "turista" },
    favoritos: [{ type: mongoose.Schema.Types.ObjectId, ref: "Destino" }],
    aventuras: [{ type: mongoose.Schema.Types.ObjectId, ref: "Aventura" }],
  },
  { timestamps: true }
);

// 🔐 Hashear password antes de guardar (VERSIÓN CORREGIDA)
usuarioSchema.pre("save", async function () {
  if (!this.isModified("password")) return;

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  } catch (error) {
    throw new Error(`Error al hashear password: ${error.message}`);
  }
});

// Método para comparar contraseñas
usuarioSchema.methods.compararPassword = function (passwordIngresada) {
  return bcrypt.compare(passwordIngresada, this.password);
};

const Usuario = mongoose.model("Usuario", usuarioSchema);
export default Usuario;
