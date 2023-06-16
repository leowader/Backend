const express = require("express");
// import all controllers
const controller = require("../controllers/ControllerReserva");

const routes = express.Router();

// Add routes
routes.get("/reservas", controller.getAllReservas);
routes.get("/reservasuser/:id", controller.getReservasUser);
routes.get("/reservas/:id", controller.getOneReserva);
routes.post("/createreserva", controller.createReserva);
routes.put("/reserva/:id", controller.updateReserva);
routes.delete("/reservas/:id", controller.deleteReserva);

module.exports = routes;