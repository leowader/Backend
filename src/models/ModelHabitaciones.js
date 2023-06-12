const mongoose = require("mongoose");
const habitacionSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    imagen: {
      type: [String],
      required: true,
      trim: true,
    },
    descripcion: {
      type: String,
      trim: true,
    },
    capacidad: {
      type: Number,
      required: true,
      trim: true,
    },
    caracteristicas: {
      type: [String],
      trim: true,
    },
    precio: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);
const habitacionModel = mongoose.model("habitaciones", habitacionSchema);
module.exports = habitacionModel;
