const habitacionModel = require("../models/ModelHabitaciones");
const getAllHabitaciones = async () => {
  try {
    // throw new Error("error de query")
    const habitaciones = await habitacionModel.find({});
    return habitaciones;
  } catch (error) {
    console.log(error.message);
    throw { status: 500, message: error.message || error };
  }
};
const getOneHabitacion = async (id) => {
  try {
    const respuesta = await habitacionModel.findOne({ _id: id });
    return respuesta;
  } catch (error) {
    console.log(error.message);
    throw { status: 500, message: error.message || error };
  }
};
const createHabitacion = async (habitacion) => {
  try {
    const respuesta = await habitacionModel.create(habitacion);
    return respuesta;
  } catch (error) {
    console.log(error.message);
    throw { status: 500, message: error.message || error };
  }
};
const updateHabitacion = async (id, body) => {
  try {
    const respuesta = await habitacionModel.updateOne({ _id: id }, body);
    return respuesta;
  } catch (error) {
    console.log(error.message);
    throw { status: 500, message: error.message || error };
  }
};
const deleteHabitacion = async (id) => {
  try {
    const respuesta = await habitacionModel.deleteOne({ _id: id });
    return respuesta;
  } catch (error) {
    console.log(error.message);
    throw { status: 500, message: error.message || error };
  }
};

module.exports = {
  getAllHabitaciones,
  createHabitacion,
  getOneHabitacion,
  updateHabitacion,
  deleteHabitacion,
};