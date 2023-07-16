const db = require("../models");
const Member = db.member;
const Op = db.Sequelize.Op;

// Create and Save a new Member
exports.create = (req, res) => {
    // Validate request
  if (!req.body.session_id) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Member
  const member = {
    user_id: req.body.user_id,
    game_id: req.body.game_id,
    name: req.body.name,
    score: req.body.score,
    rank: req.body.rank
  };

  // Save Member in the database
  Member.create(member)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Member."
      });
    });
  
};

// Find a single Member with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Member.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Member with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Member with id=" + id
        });
      });
};

// Update a Member by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Member.update(req.body, {
    where: { id: id }
    })
    .then(num => {
        if (num == 1) {
        res.send({
            message: "Member was updated successfully."
        });
        } else {
        res.send({
            message: `Cannot update Member with id=${id}. Maybe Member was not found or req.body is empty!`
        });
        }
    })
    .catch(err => {
        res.status(500).send({
        message: "Error updating Member with id=" + id
        });
    });
};

// Delete a Member with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Member.destroy({
    where: { id: id }
    })
    .then(num => {
        if (num == 1) {
        res.send({
            message: "Member was deleted successfully!"
        });
        } else {
        res.send({
            message: `Cannot delete Member with id=${id}. Maybe Member was not found!`
        });
        }
    })
    .catch(err => {
        res.status(500).send({
        message: "Could not delete Member with id=" + id
        });
    });
};

// Delete all Members from the database.
exports.deleteAll = (req, res) => {
    Member.destroy({
        where: {},
        truncate: false
    })
    .then(nums => {
        res.send({ message: `${nums} Members were deleted successfully!` });
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while removing all Members."
        });
    });
  
};