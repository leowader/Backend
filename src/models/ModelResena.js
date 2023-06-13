const mongoose = require("mongoose");
const resenaSchema = new mongoose.Schema(
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
const resenaModel = mongoose.model("resenas", resenaSchema);
module.exports = resenaModel;