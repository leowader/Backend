const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
//MIDDLEWARES
dotenv.config();
const verificarToken = async (req, res, next) => {
  const token = req.headers["x-access-token"];
  if (!token) {
    return res
      .status(400)
      .json({ auth: false, message: "no tiene token (permiso)" });
  }
  const decode = jwt.verify(token, process.env.JWT_SECRET); //decodificando token
  req.userId = decode.id;
  next();
};
module.exports = { verificarToken };
