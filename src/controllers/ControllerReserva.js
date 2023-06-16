const servicioReserva = require("../services/ServicioReserva");
const getAllReservas = async (req, res) => {
  try {
    const reservas = await servicioReserva.getAllReservas();
    res.json(reservas)
  } catch (error) {
    res
      .status(error.status || 500)
      .send({ status: "failed", data: { error: error.message || error } });
  }
};
const getReservasUser = async (req, res) => {
  try {
    const identificador = req.params.id;
    console.log("identif",typeof identificador);
    const reservas = await servicioReserva.getReservasUser(identificador.toString());
    res.json(reservas)
  } catch (error) {
    res
      .status(error.status || 500)
      .send({ status: "failed", data: { error: error.message || error } });
  }
};
const getOneReserva = async (req, res) => {
  try {
    const id = req.params.id;
    const oneReserva = await servicioReserva.getOneReserva(id);
    res.status(200).send({ status: "OK", data: oneReserva });
  } catch (error) {
    res
      .status(error.status || 500)
      .send({ status: "failed", data: { error: error.message || error } });
  }
};
const createReserva = async (req, res) => {
  try {
    const { identificador, reservas, contacto,pago,precio } = req.body;
    const reservaNueva = {
      identificador,
      reservas,
      contacto,
      pago,
      precio
    };
    console.log("----reserva--:", reservaNueva);
    const crearReserva = await servicioReserva.createReserva(reservaNueva);
    res.status(201).send({ status: "OK", data: crearReserva });
  } catch (error) {
    res
      .status(error.status || 500)
      .send({ status: "failed", data: { error: error.message || error } });
  }
};
const updateReserva = async (req, res) => {
  try {
    const body = req.body;
    const id = req.params.id;
    const respuesta = await servicioReserva.updateReserva(id, body);
    res
      .status(200)
      .send({ status: "Reserva actualizada: " + body.nombre, data: respuesta });
  } catch (error) {
    res
      .status(error.status || 500)
      .send({ status: "failed", data: { error: error.message || error } });
  }
};
const deleteReserva = async (req, res) => {
  try {
    const id = req.params.id;
    const respuesta = await servicioReserva.deleteReserva(id);
    res
      .status(200)
      .send({ status: "Reserva eliminado " + id, data: respuesta });
  } catch (error) {
    res
      .status(error.status || 500)
      .send({ status: "failed", data: { error: error.message || error } });
  }
};
module.exports = {
  getAllReservas,
  getOneReserva,
  createReserva,
  updateReserva,
  deleteReserva,
  getReservasUser
};