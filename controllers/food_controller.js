var express = require("express");

var router = express.Router();

// Import the model (food.js) to use its database functions.
var food = require("../models/food.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    food.selectAll(function(data) {
    var hbsObject = {
      foods: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/foods", function(req, res) {
  console.log("req.body",req.body);
    food.insertOne(["food_name", "eaten"], [req.body.name, req.body.eaten], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/foods/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  food.updateOne(
    {
      eaten: req.body.eaten
    },
    condition,
    function(result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

// Export routes for server.js to use.
module.exports = router;
