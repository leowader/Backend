const mongoose = require("mongoose");
const winnerSchema = new mongoose.Schema(
  {
    id: { type: Number },
    ganador: { type: String },
    fecha: { type: Date },
  },
  { timestamps: true, versionKey: false }
);
const winnerModel = mongoose.model("winners", winnerSchema);
module.exports = winnerModel;
