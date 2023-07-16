const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Subject', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    artwork: {
      type: DataTypes.STRING,
      allowNull: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    round_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Round',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'Subject',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "Subject_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
