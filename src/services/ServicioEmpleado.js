const dbEmpleado = require("../database/EmpleadoQuery");
const getAllEmpleados = async () => {
  try {
    
    // throw new Error("error desde services");
    const empleados = await dbEmpleado.getAllEmpleados();
    return empleados;
  } catch (error) {
    throw error;
  }
};
const getOneEmpleado = async (idEmpleado) => {
  try {
    const empleado = await dbEmpleado.getOneEmpleado(idEmpleado);
    return empleado;
  } catch (error) {
    throw error;
  }
};
const createEmpleado = async (nuevoEmpleado) => {
  try {
    const respuesta = await dbEmpleado.createEmpleado(nuevoEmpleado);

    return respuesta;
  } catch (error) {
    throw error;
  }
};
const updateEmpleado = async (id, body) => {
  try {
    const respuesta = await dbEmpleado.updateEmpleado(id, body);
    return respuesta;
  } catch (error) {
    throw error;
  }
};
const deleteEmpleado = async (id) => {
  try {
    const respuesta = await dbEmpleado.deleteEmpleado(id);
    return respuesta;
  } catch (error) {
    throw error;
  }
};

module.exports = {
    getAllEmpleados,
    getOneEmpleado,
    createEmpleado,
    updateEmpleado,
    deleteEmpleado,
};
