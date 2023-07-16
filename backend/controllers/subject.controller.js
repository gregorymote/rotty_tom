const db = require("../models");
const Subject = db.subject;
const Op = db.Sequelize.Op;

// Create and Save a new Subject
exports.create = (req, res) => {
    // Validate request
  if (!req.body.session_id) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Subject
  const subject = {
    name: req.body.name,
    score: req.body.score,
    artwork: req.body.artwork,
    description: req.body.description,
    round_id: req.body.round_id
  };

  // Save Subject in the database
  Subject.create(subject)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Subject."
      });
    });
  
};

// Find a single Subject with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Subject.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Subject with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Subject with id=" + id
        });
      });
};

// Update a Subject by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Subject.update(req.body, {
    where: { id: id }
    })
    .then(num => {
        if (num == 1) {
        res.send({
            message: "Subject was updated successfully."
        });
        } else {
        res.send({
            message: `Cannot update Subject with id=${id}. Maybe Subject was not found or req.body is empty!`
        });
        }
    })
    .catch(err => {
        res.status(500).send({
        message: "Error updating Subject with id=" + id
        });
    });
};

// Delete a Subject with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Subject.destroy({
    where: { id: id }
    })
    .then(num => {
        if (num == 1) {
        res.send({
            message: "Subject was deleted successfully!"
        });
        } else {
        res.send({
            message: `Cannot delete Subject with id=${id}. Maybe Subject was not found!`
        });
        }
    })
    .catch(err => {
        res.status(500).send({
        message: "Could not delete Subject with id=" + id
        });
    });
};

// Delete all Subjects from the database.
exports.deleteAll = (req, res) => {
    Subject.destroy({
        where: {},
        truncate: false
    })
    .then(nums => {
        res.send({ message: `${nums} Subjects were deleted successfully!` });
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while removing all Subjects."
        });
    });
  
};