const resenaModel = require("../models/ModelResena");
const getAllResenas = async () => {
  try {
    // throw new Error("error de query")
    const resenas = await resenaModel.find({});
    return resenas;
  } catch (error) {
    console.log(error.message);
    throw { status: 500, message: error.message || error };
  }
};
const getOneResena = async (id) => {
  try {
    const respuesta = await resenaModel.findOne({ _id: id });
    return respuesta;
  } catch (error) {
    console.log(error.message);
    throw { status: 500, message: error.message || error };
  }
};
const createResena = async (resena) => {
  try {
    const respuesta = await resenaModel.create(resena);
    return respuesta;
  } catch (error) {
    console.log(error.message);
    throw { status: 500, message: error.message || error };
  }
};
const updateResena = async (id, body) => {
  try {
    const respuesta = await resenaModel.updateOne({ _id: id }, body);
    return respuesta;
  } catch (error) {
    console.log(error.message);
    throw { status: 500, message: error.message || error };
  }
};
const deleteResena = async (id) => {
  try {
    const respuesta = await resenaModel.deleteOne({ _id: id });
    return respuesta;
  } catch (error) {
    console.log(error.message);
    throw { status: 500, message: error.message || error };
  }
};

module.exports = {
    getAllResenas,
    getOneResena,
    createResena,
    updateResena,
    deleteResena,
};