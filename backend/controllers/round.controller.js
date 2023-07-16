const db = require("../models");
const Round = db.round;
const Op = db.Sequelize.Op;

// Create and Save a new Round
exports.create = (req, res) => {
    // Validate request
  if (!req.body.session_id) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Round
  const round = {
    category: req.body.category,
    game_id: req.body.game_id,
    member_id: req.body.member_id
  };

  // Save Round in the database
  Round.create(round)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Round."
      });
    });
  
};

// Find a single Round with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Round.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Round with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Round with id=" + id
        });
      });
};

// Update a Round by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Round.update(req.body, {
    where: { id: id }
    })
    .then(num => {
        if (num == 1) {
        res.send({
            message: "Round was updated successfully."
        });
        } else {
        res.send({
            message: `Cannot update Round with id=${id}. Maybe Round was not found or req.body is empty!`
        });
        }
    })
    .catch(err => {
        res.status(500).send({
        message: "Error updating Round with id=" + id
        });
    });
};

// Delete a Round with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Round.destroy({
    where: { id: id }
    })
    .then(num => {
        if (num == 1) {
        res.send({
            message: "Round was deleted successfully!"
        });
        } else {
        res.send({
            message: `Cannot delete Round with id=${id}. Maybe Round was not found!`
        });
        }
    })
    .catch(err => {
        res.status(500).send({
        message: "Could not delete Round with id=" + id
        });
    });
};

// Delete all Rounds from the database.
exports.deleteAll = (req, res) => {
    Round.destroy({
        where: {},
        truncate: false
    })
    .then(nums => {
        res.send({ message: `${nums} Rounds were deleted successfully!` });
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while removing all Rounds."
        });
    });
  
};