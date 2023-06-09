const servicioUser = require("../services/ServicioUser");
const userModel = require("../models/ModelUser");
const TokenCreate = require("../libs/CrearToken");
const registrarse = async (req, res, next) => {
  try {
    const { nombreUsuario, correo, password } = req.body;
    const usuario = {
      nombreUsuario,
      correo,
      password,
    };
    //ocultar contraseña
    const usernuevo = new userModel(usuario);
    usernuevo.password = await usernuevo.ocultar(usuario.password);

    token = await TokenCreate.CrearToken(usernuevo.id);
    const respuesta = await servicioUser.registrarse(usernuevo);
    console.log("usuario. ", respuesta);
    res.cookie("token", token);
    res.status(200).send(respuesta);
    // res.json({auth:true,token:respuesta});
  } catch (error) {
    next(error);
  }
};
//iniciar sesion
const login = async (req, res, next) => {
  try {
    const { nombreUsuario, password } = req.body;
    console.log("username: ", nombreUsuario + " contraseña: ", password);
    const respuesta = await servicioUser.login(nombreUsuario, password);
    res.send({ status: "ok", data: respuesta });
    console.log("respuesta: ", respuesta);
  } catch (error) {
    next(error);
  }
};
//navegar
const perfil = async (req, res, next) => {
  try {
    //verificarToken;
    //throw new Error("error en perfil");
    const userid = req.userId;
    const respuesta = await servicioUser.perfil(userid);
    res.status(200).send({ status: "ok", data: respuesta });
  } catch (error) {
    next(error);
    // res.send({ status: "failed", data: { error: error.message } || error });
  }
};

module.exports = { login, registrarse, perfil };
