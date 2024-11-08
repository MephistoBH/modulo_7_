const express = require("express");
const bodyParser = require("body-parser");
const db = require("./app/models");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Sincronizar la base de datos
db.sequelize.sync().then(() => {
  console.log("Base de datos sincronizada.");
});

// Importar y usar las rutas
require("./app/routes/user.routes")(app);
require("./app/routes/bootcamp.routes")(app);

// Configuración del puerto
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}.`);
});
