const app = require("./app");
require("./database/db");
async function init() {
  await app.listen(4000);
  console.log("servidor corriendo en: http://localhost:4000");
}
init();
