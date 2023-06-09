const usuarios = require("../database/userQuery");
const Verificar = require("../libs/VerificarLogin");
const registrarse = async (user) => {
  try {
    const respuesta = await usuarios.registrarse(user);
    return respuesta;
  } catch (eror) {
    throw eror;
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
  try {
    const user = await usuarios.login(username);
    console.log("usuario login: ", user);
    if (!user) {
      return { auth: false, message: `el usuario: ${username} no existe` };
    }
    const res = Verificar.VerificarLogin(user, password);
    return res;
  } catch (eror) {
    throw eror;
  }
};
module.exports = { registrarse, perfil, login };
