const mongoose = require("mongoose");
const reservaSchema = new mongoose.Schema(
  {
    identificador: {
      type: String,
      required: true,
      trim: true,
    },
    reservas: {
      fechaIngreso: {
        type: Date,
        required: true,
        trim: true,
      },
      fechaSalida: {
        type: Date,
        required: true,
        trim: true,
      },
      adultos: {
        type: Number,
        required: true,
        trim: true,
      },
      niños: {
        type: Number,
        required: true,
        trim: true,
      },
      habitacion: {
        type: String,
        required: true,
        trim: true,
      },
    },
    contacto: {
      nombre: {
        type: String,
        required: true,
        trim: true,
      },
      apellido: {
        type: String,
        required: true,
        trim: true,
      },
      correo: {
        type: String,
        required: true,
        trim: true,
      },
      telefono: {
        type: Number,
        required: true,
        trim: true,
      },
    },
    pago: {
      titular: {
        type: String,
        required: true,
        trim: true,
      },
      tarjeta: {
        type: Number,
        required: true,
        trim: true,
      },
      fechaVencimiento: {
        type: Date,
        required: true,
        trim: true,
      },
      cvv: {
        type: Number,
        required: true,
        trim: true,
      },
    },
    precio: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);
const reservasModel = mongoose.model("reservas", reservaSchema);
module.exports = reservasModel;
