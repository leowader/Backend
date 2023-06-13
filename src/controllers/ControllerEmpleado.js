const servicioEmpleado = require("../services/ServicioEmpleado");

const getAllEmpleados = async (req, res) => {
    try {
      const empleados = await servicioEmpleado.getAllEmpleados();
      res.json({empleados})
    } catch (error) {
      res
        .status(error.status || 500)
        .send({ status: "failed", data: { error: error.message || error } });
    }
  };
const getOneEmpleado = async (req, res) => {
  try {
    const id = req.params.id;
    const oneUser = await servicioEmpleado.getOneEmpleado(id);
    res.status(200).send({ status: "OK", data: oneUser });
  } catch (error) {
    res
      .status(error.status || 500)
      .send({ status: "failed", data: { error: error.message || error } });
  }
};
const createEmpleado = async (req, res) => {
  try {
    const { nombre, imagen, descripcion} = req.body;
    const empleadoNuevo = {
      nombre,
      imagen,
      descripcion
    };
    console.log("----Empleado--:", empleadoNuevo);
    const crearEmpleado = await servicioEmpleado.createEmpleado(empleadoNuevo);
    res.status(201).send({ status: "OK", data: crearEmpleado });
  } catch (error) {
    res
      .status(error.status || 500)
      .send({ status: "failed", data: { error: error.message || error } });
  }
};
const updateEmpleado = async (req, res) => {
  try {
    const body = req.body;
    const id = req.params.id;
    const respuesta = await servicioEmpleado.updateEmpleado(id, body);
    res
      .status(200)
      .send({ status: "Empleado actualizada: " + body.nombre, data: respuesta });
  } catch (error) {
    res
      .status(error.status || 500)
      .send({ status: "failed", data: { error: error.message || error } });
  }
};
const deleteEmpleado = async (req, res) => {
  try {
    const id = req.params.id;
    const respuesta = await servicioEmpleado.deleteEmpleado(id);
    res
      .status(200)
      .send({ status: "Empleado eliminado " + id, data: respuesta });
  } catch (error) {
    res
      .status(error.status || 500)
      .send({ status: "failed", data: { error: error.message || error } });
  }
};
module.exports = {
  getAllEmpleados,
  getOneEmpleado,
  createEmpleado,
  updateEmpleado,
  deleteEmpleado,
};