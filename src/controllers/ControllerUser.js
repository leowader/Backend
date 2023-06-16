const servicioUser = require("../services/ServicioUser");
const userModel = require("../models/ModelUser");
const TokenCreate = require("../libs/CrearToken");
const dotenv = require("dotenv");
dotenv.config();
const jwt = require("jsonwebtoken");
// const Verificar = require("../libs/VerificarLogin");
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
    
    const userExiste = await servicioUser.verificarUserName(nombreUsuario);
    if (userExiste) {
      return res
        .status(400)
        .json({ mensaje: ["el nombre de usuario ya existe"] });
    }
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
    if (!respuesta) {
      return { auth: false, message: `el usuario: ${nombreUsuario} no existe` };
    }
    if (respuesta.auth) {
      const token = TokenCreate.CrearToken(respuesta.usuario._id);
      res.cookie("token", token);
    }
    res.status(200).send(respuesta);
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
    if (!respuesta) {
      res.status(400).send({ message: "usuario no encontrado" });
    }

    res.status(200).send({ status: "ok", data: respuesta });
  } catch (error) {
    next(error);
    // res.send({ status: "failed", data: { error: error.message } || error });
  }
};
const verificarToken = async (req, res, next) => {
  try {
    const userid = req.userId;
    const respuesta = await servicioUser.perfil(userid);
    if (!respuesta) {
      res.status(400).send({ message: "usuario no encontrado" });
    }

    res.status(200).send({ auth: true, usuario: respuesta });
  } catch (error) {
    next(error);
  }
};
const cerrarSesion = (req, res, next) => {
  try {
    res.cookie("token", "", {
      expires: new Date(0),
    });
    console.log("sesion cerrada");
    res.status(200).send({ status:true });
  } catch (error) {
    next(error);
  }
};

module.exports = { login, registrarse, perfil, cerrarSesion,verificarToken };
