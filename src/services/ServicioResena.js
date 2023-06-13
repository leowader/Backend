const dbResena = require("../database/ResenaQuery");
const getAllResenas = async () => {
  try {
    
    // throw new Error("error desde services");
    const resenas = await dbResena.getAllResenas();
    return resenas;
  } catch (error) {
    throw error;
  }
};
const getOneResena = async (idResena) => {
  try {
    const resena = await dbResena.getOneResena(idResena);
    return resena;
  } catch (error) {
    throw error;
  }
};
const createResena = async (nuevaResena) => {
  try {
    const respuesta = await dbResena.createResena(nuevaResena);

    return respuesta;
  } catch (error) {
    throw error;
  }
};
const updateResena = async (id, body) => {
  try {
    const respuesta = await dbResena.updateResena(id, body);
    return respuesta;
  } catch (error) {
    throw error;
  }
};
const deleteResena = async (id) => {
  try {
    const respuesta = await dbResena.deleteResena(id);
    return respuesta;
  } catch (error) {
    throw error;
  }
};

module.exports = {
    getAllResenas,
    getOneResena,
    createResena,
    updateResena,
    deleteResena,
};
