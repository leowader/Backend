const reservasModel = require("../models/Reservas");
const getAllReservas = async () => {
  try {
    // throw new Error("error de query")
    const reservas = await reservasModel.find({});
    return reservas;
  } catch (error) {
    console.log(error.message);
    throw { status: 500, message: error.message || error };
  }
};
const getOneReserva = async (id) => {
  try {
    const respuesta = await reservasModel.findOne({ identificador: id });
    return respuesta;
  } catch (error) {
    console.log(error.message);
    throw { status: 500, message: error.message || error };
  }
};
const getReservasUser = async (Identificador) => {
  try {
    // throw new Error("error de query")
    const reservas = await reservasModel.find({identificador: Identificador});
    return reservas;
  } catch (error) {
    console.log(error.message);
    throw { status: 500, message: error.message || error };
  }
};

const createReserva = async (habitacion) => {
  try {
    const respuesta = await reservasModel.create(habitacion);
    return respuesta;
  } catch (error) {
    console.log(error.message);
    throw { status: 500, message: error.message || error };
  }
};
const updateReserva = async (id, body) => {
  try {
    const respuesta = await reservasModel.updateOne({ _id: id }, body);
    return respuesta;
  } catch (error) {
    console.log(error.message);
    throw { status: 500, message: error.message || error };
  }
};
const deleteReserva = async (id) => {
  try {
    const respuesta = await reservasModel.deleteOne({ _id: id });
    return respuesta;
  } catch (error) {
    console.log(error.message);
    throw { status: 500, message: error.message || error };
  }
};

module.exports = {
  getAllReservas,
  createReserva,
  getOneReserva,
  updateReserva,
  deleteReserva,
  getReservasUser
};