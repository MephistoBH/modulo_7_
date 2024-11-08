module.exports = (app) => {
    const bootcamps = require("../controllers/bootcamp.controller.js");
    const router = require("express").Router();
  
    router.post("/", bootcamps.createBootcamp);
    router.get("/", bootcamps.findAll);
    router.get("/:id", bootcamps.findById);
    router.post("/addUser", bootcamps.addUser);
  
    app.use("/api/bootcamps", router);
  };
  