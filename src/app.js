const express = require("express");
const rutaUser = require("./routes/userRutas");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false })); //entiende datos de un formulario
app.use("/api",rutaUser);
app.use(require("./middlewares/Errores").ManejoError);
module.exports = app;