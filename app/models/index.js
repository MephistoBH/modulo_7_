const Sequelize = require('sequelize');

// Configuración de la conexión con el dialecto especificado
const sequelize = new Sequelize('db_bootcamp', 'postgres', 'admin0202', {
  host: 'localhost',
  dialect: 'postgres', 
  port: 5432, 
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('./user.model.js')(sequelize, Sequelize.DataTypes);
db.Bootcamp = require('./bootcamp.model.js')(sequelize, Sequelize.DataTypes);

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;


