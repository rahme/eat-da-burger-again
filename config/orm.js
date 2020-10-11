const connection = require("../config/connection.js");

function huh(num) {
  const array1 = [];
  for (let i = 0; i < num; i++) {
    array1.push("?")
  }
  return array1.toString()
}

function sendIt(object){
  var array2 = [];
  for (var key in object) {
    array2.push(key + '=' + object[key]);
  };
  return array2.toString()
};

const orm = {
  all: function(tableInput, cb) {
    let query_1 = "SELECT * FROM " + tableInput + ";"
    connection.query(query_1, function(err, response) {
      if (err) {throw err}
      cb(response)
    });
  },
  create: function(table, column, value, cb) {
    let query_2 = "INSERT INTO " + table
    query_2 += " ("
    query_2 += column.toString()
    query_2 += ") "
    query_2 += "VALUES ("
    query_2 += huh(value.length)
    query_2 += ") "

    connection.query(query_2, value, function(err, response) {
      if (err) {throw err}
      cb(response)
    });
  },
  update: function(table, objVal, condition, cb) {
    let query_3 = "UPDATE " + table
    query_3 += " SET "
    query_3 += sendIt(objVal)
    query_3 += " WHERE "
    query_3 += condition

    connection.query(query_3, function(err, response) {
      if (err) {throw err}
      cb(response)
    })
  },
  delete: function(table, condition, cb) {
    let query_4 = "DELETE FROM " + table;
    query_4 += " WHERE "
    query_4 += condition

    connection.query(query_4, function(err, response) {
      if (err) {throw err}
      cb(response)
    });
  }
};

module.exports = orm