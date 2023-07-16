const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Guess', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true
    },
    delta: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    value: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    member_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Member',
        key: 'id'
      }
    },
    subject_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Subject',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'Guess',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "Guess_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
