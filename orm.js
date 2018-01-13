var Sequelize = require("sequelize");

var sequelize = new Sequelize({
  username: "postgres",
  password: "blu",
  dialect: "postgres",
  database: "orm",
  host: "localhost"
});

var TestUser = sequelize.define("test_user", {
  firstname: Sequelize.STRING,
  lastname: Sequelize.STRING
});

var orm = {
  initialize: function() {
    TestUser.sync().then(function() {
      TestUser.create({
        firstname: "Lester",
        lastname: "Loor"
      });
      TestUser.create({
        firstname: "Axel",
        lastname: "Loor"
      });
      TestUser.create({
        firstname: "Ariel",
        lastname: "Zuniga"
      });
    });
  },
  TestUser: TestUser,

  getAll: function(tableName, callback) {
    this.initialize();
    tableName.findAll().then(function(rows) {
      callback(rows);
    });
  },

  findById: function(id, tableName, callback) {
    this.initialize();
    tableName.findById(id).then(function(row) {
      callback(row);
    });
  }
};

module.exports = orm;
