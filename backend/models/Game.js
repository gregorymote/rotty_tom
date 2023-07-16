const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Game', {
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
    member_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Member',
        key: 'id'
      }
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true
    },
    num_subjects: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Game',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "Game_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
