module.exports = app => {
    const games = require("../controllers/game.controller.js");
  
    var router = require("express").Router();
  
    // Create a new User
    router.post("/", games.create);
      
    // Retrieve a single User with id
    router.get("/:id", games.findOne);
  
    // Update a User with id
    router.put("/:id", games.update);
  
    // Delete a User with id
    router.delete("/:id", games.delete);
  
    // Delete all Users
    router.delete("/", games.deleteAll);
  
    app.use('/api/games', router);
  };