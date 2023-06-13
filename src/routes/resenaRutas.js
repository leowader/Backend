const express = require("express");
// import all controllers
const controller = require("../controllers/ControllerResenas");

const routes = express.Router();

// Add routes
routes.get("/resenas", controller.getAllResenas);
routes.get("/resenas/:id", controller.getOneResena);
routes.post("/crearresenas", controller.createResena);
routes.put("/resenas/:id", controller.updateResena);
routes.delete("/resenas/:id", controller.deleteResena);

module.exports = routes;
