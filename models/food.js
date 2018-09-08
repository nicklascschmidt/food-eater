
// * Inside `burger.js`, import `orm.js` into `burger.js`

// * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.

// * Export at the end of the `burger.js` file.




// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var food = {
    selectAll: function(cb) {
      orm.selectAll("foods", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    insertOne: function(cols, vals, cb) {
      orm.insertOne("foods", cols, vals, function(res) {
        cb(res);
      });
    },
    updateOne: function(objColVals, condition, cb) {
      orm.updateOne("foods", objColVals, condition, function(res) {
        cb(res);
      });
    }
  };

// Export the database functions for the controller (catsController.js).
module.exports = food;
