const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();
const CrearToken =  (userId) => {
  const token = jwt.sign({ id: userId }, process.env.JWT_SECRET); //codificando token
  return token;
};
module.exports = { CrearToken };