module.exports = app => {
    const guesss = require("../controllers/guess.controller.js");
  
    var router = require("express").Router();
  
    // Create a new User
    router.post("/", guesss.create);
      
    // Retrieve a single User with id
    router.get("/:id", guesss.findOne);
  
    // Update a User with id
    router.put("/:id", guesss.update);
  
    // Delete a User with id
    router.delete("/:id", guesss.delete);
  
    // Delete all Users
    router.delete("/", guesss.deleteAll);
  
    app.use('/api/guesss', router);
  };