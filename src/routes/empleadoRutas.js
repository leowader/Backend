const express = require("express");
// import all controllers
const controller = require("../controllers/ControllerEmpleado");

const routes = express.Router();

// Add routes
routes.get("/empleados", controller.getAllEmpleados);
routes.get("/empleados/:id", controller.getOneEmpleado);
routes.post("/crearempleados", controller.createEmpleado);
routes.put("/empleados/:id", controller.updateEmpleado);
routes.delete("/empleados/:id", controller.deleteEmpleado);

module.exports = routes;