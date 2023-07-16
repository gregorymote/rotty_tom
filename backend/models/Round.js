const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Round', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    category: {
      type: DataTypes.STRING,
      allowNull: true
    },
    game_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Game',
        key: 'id'
      }
    },
    member_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Member',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'Round',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "Round_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
