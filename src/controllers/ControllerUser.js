const servicioUser = require("../services/ServicioUser");
//const {verificarToken} = require("../controllers/VerificarController");
const registrarse = async (req, res, next) => {
  try {
    const { nombreUsuario, correo, password } = req.body;
    const usuario = {
      nombreUsuario,
      correo,
      password,
    };
    const respuesta = await servicioUser.registrarse(usuario);
    console.log("usuario. ", respuesta);
    res.status(200).send({ status: "ok", data: respuesta });
    // res.json({auth:true,token:respuesta});
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
//iniciar sesion
const login = async (req, res, next) => {
  try {
    const { nombreUsuario, password } = req.body;
    console.log("username: ", nombreUsuario + " contraseña: ", password);
    const respuesta = await servicioUser.login(nombreUsuario, password);
    res.send({status:"ok",data:respuesta})
    console.log("respuesta: ", respuesta);
  } catch (error) {
    next(error);
  }
};

module.exports = { login, registrarse, perfil };
