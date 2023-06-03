const express = require("express");
const rutaUser = require("./routes/userRutas");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.use(rutaUser);
app.get("/", (req, res) => {
  res.send("si funciono");
});
app.post("/probar", (req, res) => {
  console.log(req.body);
  res.send("si funciono, llego al backend");
});
app.use(express.urlencoded({ extended: false })); //entiende datos de un formulario
app.use(require("./controllers/Errores").ManejoError);

module.exports = app;
