// const userModel = require("../models/ModelUser");
const VerificarLogin = async (user,password) => {
  //si existe el usuario validar contraseña
  const passwordValida = await user.validarPassword(password);
  console.log("valido?: ", passwordValida);
  if (!passwordValida) {
    //contraseña incorrecta
    console.log("contraseña incorrecta");
    return { auth:false,message:"contraseña incorrecta"};
  } else {
    //contraseña correcta
    console.log("contraseña correcta");
    return {auth:true,usuario:user};
  }
};
module.exports = { VerificarLogin };
