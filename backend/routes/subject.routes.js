module.exports = app => {
    const subjects = require("../controllers/subject.controller.js");
  
    var router = require("express").Router();
  
    // Create a new User
    router.post("/", subjects.create);
      
    // Retrieve a single User with id
    router.get("/:id", subjects.findOne);
  
    // Update a User with id
    router.put("/:id", subjects.update);
  
    // Delete a User with id
    router.delete("/:id", subjects.delete);
  
    // Delete all Users
    router.delete("/", subjects.deleteAll);
  
    app.use('/api/subjects', router);
  };