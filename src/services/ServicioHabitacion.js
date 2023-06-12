const dbHabitacion = require("../database/habitacionQuery");
const getAllHabitaciones = async () => {
  try {
    
    // throw new Error("error desde services");
    const habitaciones = await dbHabitacion.getAllHabitaciones();
    return habitaciones;
  } catch (error) {
    throw error;
  }
};
const getOneHabitacion = async (idHabitacion) => {
  try {
    const habitacion = await dbHabitacion.getOneHabitacion(idHabitacion);
    return habitacion;
  } catch (error) {
    throw error;
  }
};
const createHabitacion = async (nuevoUser) => {
  try {
    const respuesta = await dbHabitacion.createHabitacion(nuevoUser);

    return respuesta;
  } catch (error) {
    throw error;
  }
};
const updateHabitacion = async (id, body) => {
  try {
    const respuesta = await dbHabitacion.updateHabitacion(id, body);
    return respuesta;
  } catch (error) {
    throw error;
  }
};
const deleteHabitacion = async (id) => {
  try {
    const respuesta = await dbHabitacion.deleteHabitacion(id);
    return respuesta;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllHabitaciones,
  createHabitacion,
  getOneHabitacion,
  updateHabitacion,
  deleteHabitacion,
};