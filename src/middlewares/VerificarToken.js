const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
//MIDDLEWARES
dotenv.config();
const verificarToken = async (req, res, next) => {
  // const token = req.headers["x-access-token"];
  const { token } = req.cookies;
  console.log(token);
  if (!token) {
    return res
      .status(400)
      .json({ auth: false, message: "no tiene token (permiso)" });
  }
  // const decode =
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "token invalido" });
    req.userId = user.id;
    console.log(user);
    next();
  }); //decodificando token
  // req.userId = decode.id;
};
module.exports = { verificarToken };
