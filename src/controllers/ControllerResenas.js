const servicioResena = require("../services/ServicioResena");
const getAllResenas = async (req, res) => {
  try {
    const resenas = await servicioResena.getAllResenas();
    res.json({resenas})
  } catch (error) {
    res
      .status(error.status || 500)
      .send({ status: "failed", data: { error: error.message || error } });
  }
};
const getOneResena = async (req, res) => {
  try {
    const id = req.params.id;
    const oneUser = await servicioResena.getOneResena(id);
    res.status(200).send({ status: "OK", data: oneUser });
  } catch (error) {
    res
      .status(error.status || 500)
      .send({ status: "failed", data: { error: error.message || error } });
  }
};
const createResena = async (req, res) => {
  try {
    const { nombre, imagen, descripcion} = req.body;
    const resenaNueva = {
      nombre,
      imagen,
      descripcion
    };
    console.log("----Resena--:", resenaNueva);
    const crearResena = await servicioResena.createResena(resenaNueva);
    res.status(201).send({ status: "OK", data: crearResena });
  } catch (error) {
    res
      .status(error.status || 500)
      .send({ status: "failed", data: { error: error.message || error } });
  }
};
const updateResena = async (req, res) => {
  try {
    const body = req.body;
    const id = req.params.id;
    const respuesta = await servicioResena.updateResena(id, body);
    res
      .status(200)
      .send({ status: "Resena actualizada: " + body.nombre, data: respuesta });
  } catch (error) {
    res
      .status(error.status || 500)
      .send({ status: "failed", data: { error: error.message || error } });
  }
};
const deleteResena = async (req, res) => {
  try {
    const id = req.params.id;
    const respuesta = await servicioResena.deleteResena(id);
    res
      .status(200)
      .send({ status: "Resena eliminado " + id, data: respuesta });
  } catch (error) {
    res
      .status(error.status || 500)
      .send({ status: "failed", data: { error: error.message || error } });
  }
};
module.exports = {
  getAllResenas,
  getOneResena,
  createResena,
  updateResena,
  deleteResena,
};