const mongoose = require("mongoose");
const empleadoSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    imagen: {
      type: String,
      required: true,
      trim: true,
    },
    descripcion: {
      type: String,
      trim: true,
    }
  },
  { timestamps: true, versionKey: false }
);
const empleadoModel = mongoose.model("empleados", empleadoSchema);
module.exports = empleadoModel;