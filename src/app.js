const express = require("express");
const rutaUser = require("./routes/userRutas");
const rutaHabitacion= require("./routes/habitacionRutas")
const rutaResena = require("./routes/resenaRutas")
const rutaEmpleado = require("./routes/empleadoRutas")
const  rutaReserva=require("./routes/reservasRutas")
const cors = require("cors");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false })); //entiende datos de un formulario
app.use("/api", rutaUser);
app.use("/api", rutaHabitacion);
app.use("/api", rutaResena);
app.use("/api", rutaEmpleado);
app.use("/api", rutaReserva);
app.use(require("./middlewares/Errores").ManejoError);
module.exports = app;
