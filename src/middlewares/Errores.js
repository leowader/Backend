//MIDDLEWARES
const ManejoError = async (error, req, res, next) => {
  return res.json({ message: error.message,
status:"failed" });
};
module.exports = { ManejoError };
