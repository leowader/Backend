const express = require("express");
// import all controllers
const controller = require("../controllers/ControllerHabitacion");

const routes = express.Router();

// Add routes
routes.get("/habitaciones", controller.getAllHabitaciones);
routes.get("/habitaciones/:id", controller.getOneHabitacion);
routes.post("/crearhabitacion", controller.createHabitacion);
routes.put("/habitaciones/:id", controller.updateHabitacion);
routes.delete("/habitaciones/:id", controller.deleteHabitacion);

module.exports = routes;
