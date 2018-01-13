var express = require("express");
var app = express();
var orm = require("./orm");
var myTable = orm.TestUser;

var getAll = function(req, res, next) {
  orm.getAll(myTable, function(data) {
    console.log("getall: ", data);
  });
  next();
};

var getByID = function(req, res, next) {
  orm.findById(2, myTable, function(data) {
    console.log("getbyID: ", data);
  });
  next();
};

app.use(getAll);
app.use(getByID);

app.get("*", function(req, res) {
  res.send("hello");
});

app.listen(5500, function() {
  console.log("listen at 5500");
});
