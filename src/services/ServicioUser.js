const usuarios = require("../database/userQuery");
const dotenv = require("dotenv");

const userModel = require("../models/ModelUser");
const jwt = require("jsonwebtoken");
dotenv.config();
const registrarse = async (user) => {
  const usernuevo = new userModel(user);
  try {
    usernuevo.password = await usernuevo.ocultar(user.password);
    const respuesta = await usuarios.registrarse(usernuevo);
    const token = jwt.sign({ id: usernuevo._id }, process.env.JWT_SECRET); //codificando token
    return { auth: true, respuesta, token };
  } catch (error) {
    throw error;
  }
};
const perfil = async (userid) => {
  const user = await usuarios.perfil(userid);
  //console.log("token decode", decode);
  if (!user) {
    return "usuario no encontrado: ", userid;
  }

  return user;
};
const login = async (username, password) => {
  const user = await usuarios.login(username);
  console.log("usuario login: ",user);
  if (!user) {
    return `el usuario: ${username} no existe`;
  }

  //si existe el usuario validar contraseña
  const passwordValida = await user.validarPassword(password);
  console.log("valido?: ", passwordValida);
  if (!passwordValida) {
    //contraseña incorrecta
    console.log("contraseña incorrecta");
    return { auth: false, token: null };
  } else {
    //contraseña correcta
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    console.log("contraseña correcta");
    return { auth: true, token };
  }
};
module.exports = { registrarse, perfil, login };
