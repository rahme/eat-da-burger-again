const orm = require("../config/orm.js");

const burger = {
  all: function(cb) {
    orm.all("burgers", function(response) {
      cb(response);
    });
  },
  create: function(column, value, cb) {
    orm.create("burgers", column, value, function(response) {
      cb(response);
    });
  },
  update: function(objVal, cond, cb) {
    orm.update("burgers", objVal, cond, function(response) {
      cb(response);
    });
  },
  delete: function(cond, cb) {
    orm.delete("burgers", cond, function(response) {
      cb(response);
    });
  }
};

module.exports = burger;