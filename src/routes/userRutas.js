const express = require("express");
const userController =require("../controllers/ControllerUser");
// import all controllers
// import SessionController from './app/controllers/SessionController';
const verificar = require("../middlewares/VerificarController");
const routes = express.Router();

// Add routes
routes.post("/registrarse", userController.registrarse);
routes.post("/login", userController.login);
routes.get("/miperfil",verificar.verificarToken, userController.perfil);

// routes.put('/', SessionController.store);
// routes.delete('/', SessionController.store);

module.exports = routes;
