const db = require("../models");
const Guess = db.guess;
const Op = db.Sequelize.Op;

// Create and Save a new Guess
exports.create = (req, res) => {
    // Validate request
  if (!req.body.session_id) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Guess
  const guess = {
    title: req.body.title,
    delta: req.body.delta,
    value: req.body.value,
    member_id: req.body.member_id,
    subject_id: req.body.subject_id
  };

  // Save Guess in the database
  Guess.create(guess)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Guess."
      });
    });
  
};

// Find a single Guess with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Guess.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Guess with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Guess with id=" + id
        });
      });
};

// Update a Guess by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Guess.update(req.body, {
    where: { id: id }
    })
    .then(num => {
        if (num == 1) {
        res.send({
            message: "Guess was updated successfully."
        });
        } else {
        res.send({
            message: `Cannot update Guess with id=${id}. Maybe Guess was not found or req.body is empty!`
        });
        }
    })
    .catch(err => {
        res.status(500).send({
        message: "Error updating Guess with id=" + id
        });
    });
};

// Delete a Guess with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Guess.destroy({
    where: { id: id }
    })
    .then(num => {
        if (num == 1) {
        res.send({
            message: "Guess was deleted successfully!"
        });
        } else {
        res.send({
            message: `Cannot delete Guess with id=${id}. Maybe Guess was not found!`
        });
        }
    })
    .catch(err => {
        res.status(500).send({
        message: "Could not delete Guess with id=" + id
        });
    });
};

// Delete all Guesss from the database.
exports.deleteAll = (req, res) => {
    Guess.destroy({
        where: {},
        truncate: false
    })
    .then(nums => {
        res.send({ message: `${nums} Guesss were deleted successfully!` });
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while removing all Guesss."
        });
    });
  
};