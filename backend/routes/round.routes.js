module.exports = app => {
    const rounds = require("../controllers/round.controller.js");
  
    var router = require("express").Router();
  
    // Create a new User
    router.post("/", rounds.create);
      
    // Retrieve a single User with id
    router.get("/:id", rounds.findOne);
  
    // Update a User with id
    router.put("/:id", rounds.update);
  
    // Delete a User with id
    router.delete("/:id", rounds.delete);
  
    // Delete all Users
    router.delete("/", rounds.deleteAll);
  
    app.use('/api/rounds', router);
  };