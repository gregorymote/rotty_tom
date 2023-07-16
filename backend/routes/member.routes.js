module.exports = app => {
    const members = require("../controllers/member.controller.js");
  
    var router = require("express").Router();
  
    // Create a new User
    router.post("/", members.create);
      
    // Retrieve a single User with id
    router.get("/:id", members.findOne);
  
    // Update a User with id
    router.put("/:id", members.update);
  
    // Delete a User with id
    router.delete("/:id", members.delete);
  
    // Delete all Users
    router.delete("/", members.deleteAll);
  
    app.use('/api/members', router);
  };