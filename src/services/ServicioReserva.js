const dbReservas = require("../database/reservasQuery");
const getAllReservas = async () => {
  try {
    
    // throw new Error("error desde services");
    const reservas = await dbReservas.getAllReservas();
    return reservas;
  } catch (error) {
    throw error;
  }
};
const getReservasUser = async (identificador) => {
  try {
    
    // throw new Error("error desde services");
    const reservas = await dbReservas.getReservasUser(identificador);
    return reservas;
  } catch (error) {
    throw error;
  }
};
const getOneReserva = async (identificador) => {
  try {
    const reserva = await dbReservas.getOneReserva(identificador);
    return reserva;
  } catch (error) {
    throw error;
  }
};
const createReserva = async (reserva) => {
  try {
    const respuesta = await dbReservas.createReserva(reserva);

    return respuesta;
  } catch (error) {
    throw error;
  }
};
const updateReserva = async (id, body) => {
  try {
    const respuesta = await dbReservas.updateReserva(id, body);
    return respuesta;
  } catch (error) {
    throw error;
  }
};
const deleteReserva = async (id) => {
  try {
    const respuesta = await dbReservas.deleteReserva(id);
    return respuesta;
  } catch (error) {
    throw error;
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