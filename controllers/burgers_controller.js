const express = require("express");
const router = express.Router();
const app = require("../models/burger.js");

router.get("/", function(request, response) {
  app.all(function(data) {
    const obj1 = {
      burgers: data
    };
    response.render("index", obj1);
  });
});

router.post("/api/burgers", function(request, response) {
  const obj2 = false;
  app.create([
    "burger_name", "devoured"
  ], [
    request.body.name, obj2
  ], function(result) {
    response.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(request, response) {
  const obj3 = true;
  const condition = "id = " + request.params.id;
  app.update({
    devoured: obj3
  }, condition, function(result) {
    if (result.changedRows == 0) {
      return response.status(404).end();
    } else {
      response.status(200).end();
    }
  });
});

module.exports = router;