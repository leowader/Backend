const empleadoModel = require("../models/ModelEmpleado");

const getAllEmpleados = async () => {
  try {
    // throw new Error("error de query")
    const empleados = await empleadoModel.find({});
    return empleados;
  } catch (error) {
    console.log(error.message);
    throw { status: 500, message: error.message || error };
  }
};
const getOneEmpleado = async (id) => {
  try {
    const respuesta = await empleadoModel.findOne({ _id: id });
    return respuesta;
  } catch (error) {
    console.log(error.message);
    throw { status: 500, message: error.message || error };
  }
};
const createEmpleado = async (empleado) => {
  try {
    const respuesta = await empleadoModel.create(empleado);
    return respuesta;
  } catch (error) {
    console.log(error.message);
    throw { status: 500, message: error.message || error };
  }
};
const updateEmpleado = async (id, body) => {
  try {
    const respuesta = await empleadoModel.updateOne({ _id: id }, body);
    return respuesta;
  } catch (error) {
    console.log(error.message);
    throw { status: 500, message: error.message || error };
  }
};
const deleteEmpleado = async (id) => {
  try {
    const respuesta = await empleadoModel.deleteOne({ _id: id });
    return respuesta;
  } catch (error) {
    console.log(error.message);
    throw { status: 500, message: error.message || error };
  }
};

module.exports = {
    getAllEmpleados,
    getOneEmpleado,
    createEmpleado,
    updateEmpleado,
    deleteEmpleado,
};