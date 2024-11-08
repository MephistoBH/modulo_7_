const db = require("../models");
const User = db.users;

// Crear un nuevo usuario
exports.createUser = async (req, res) => {
  try {
    const { firstName, lastName, email } = req.body;
    if (!firstName || !lastName || !email) {
      return res.status(400).send({ message: "Todos los campos son obligatorios" });
    }
    const newUser = await User.create({ firstName, lastName, email });
    res.status(201).send(newUser);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Otros métodos (findAll, findUserById, updateUserById, deleteUserById) se agregarán aquí.
