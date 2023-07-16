var DataTypes = require("sequelize").DataTypes;
var _Game = require("./Game");
var _Guess = require("./Guess");
var _Member = require("./Member");
var _Round = require("./Round");
var _SequelizeMeta = require("./SequelizeMeta");
var _Subject = require("./Subject");
var _User = require("./User");

function initModels(sequelize) {
  var Game = _Game(sequelize, DataTypes);
  var Guess = _Guess(sequelize, DataTypes);
  var Member = _Member(sequelize, DataTypes);
  var Round = _Round(sequelize, DataTypes);
  var SequelizeMeta = _SequelizeMeta(sequelize, DataTypes);
  var Subject = _Subject(sequelize, DataTypes);
  var User = _User(sequelize, DataTypes);

  Member.belongsTo(Game, { as: "game", foreignKey: "game_id"});
  Game.hasMany(Member, { as: "Members", foreignKey: "game_id"});
  Round.belongsTo(Game, { as: "game", foreignKey: "game_id"});
  Game.hasMany(Round, { as: "Rounds", foreignKey: "game_id"});
  Game.belongsTo(Member, { as: "member", foreignKey: "member_id"});
  Member.hasMany(Game, { as: "Games", foreignKey: "member_id"});
  Guess.belongsTo(Member, { as: "member", foreignKey: "member_id"});
  Member.hasMany(Guess, { as: "Guesses", foreignKey: "member_id"});
  Round.belongsTo(Member, { as: "member", foreignKey: "member_id"});
  Member.hasMany(Round, { as: "Rounds", foreignKey: "member_id"});
  Subject.belongsTo(Round, { as: "round", foreignKey: "round_id"});
  Round.hasMany(Subject, { as: "Subjects", foreignKey: "round_id"});
  Guess.belongsTo(Subject, { as: "subject", foreignKey: "subject_id"});
  Subject.hasMany(Guess, { as: "Guesses", foreignKey: "subject_id"});
  Member.belongsTo(User, { as: "user", foreignKey: "user_id"});
  User.hasMany(Member, { as: "Members", foreignKey: "user_id"});

  return {
    Game,
    Guess,
    Member,
    Round,
    SequelizeMeta,
    Subject,
    User,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
