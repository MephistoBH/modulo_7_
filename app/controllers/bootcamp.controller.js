const db = require("../models");
const Bootcamp = db.bootcamps;

// Crear un nuevo bootcamp
exports.createBootcamp = async (req, res) => {
  try {
    const { title, cue, description } = req.body;
    if (!title || !cue || !description) {
      return res.status(400).send({ message: "Todos los campos son obligatorios" });
    }
    if (cue < 5 || cue > 10) {
      return res.status(400).send({ message: "El CUE debe estar entre 5 y 10" });
    }
    const newBootcamp = await Bootcamp.create({ title, cue, description });
    res.status(201).send(newBootcamp);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Otros métodos (addUser, findById, findAll) se agregarán aquí.
