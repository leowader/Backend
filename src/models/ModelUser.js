const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = new Schema(
  {
    nombreUsuario: {
      type: String,
      unique:true,
      required:true,
      trim:true,
    },
    correo: {
      type: String,
      unique:true,
      required:true,
      trim:true,
    },
    password: {
      type: String,
      required:true,
      trim:true,
    },
  },
  { timestamps: true, versionKey: false }
);
//encriptand contraseña con bcryptjs
userSchema.methods.ocultar = async (contrasena) => {
  const sald = await bcrypt.genSalt(10); //codigo
  return bcrypt.hash(contrasena, sald);
};
userSchema.methods.validarPassword = function (password) {
  return bcrypt.compare(password, this.password);
};
const userModel = model("users", userSchema);
//const modelUser = mongoose.model("User", userSchema);
module.exports = userModel;
