const userModel = require("../models/ModelUser");
const registrarse = async (user) => {
  try {
    //throw new Error("error de query")
    const respuesta = await userModel.create(user);
    return {
      id: respuesta._id,
      nombreUsuario: respuesta.nombreUsuario,
      correo: respuesta.correo,
      createdAt:respuesta.createdAt,
    };
  } catch (error) {
    console.log(error.message);
    throw { status: 500, message: error.message || error };
  }
};
const perfil = async (userId) => {
  try {
    const respuesta = await userModel.findById(userId, {
      password: 0,
      createdAt: 0,
      updatedAt: 0,
    });
    return respuesta;
  } catch (error) {}
};
const login = async (username) => {
  try {
    const respuesta = userModel.findOne({ nombreUsuario: username });
    return respuesta;
  } catch (error) {
    return error;
  }
};
module.exports = { registrarse, perfil, login };
