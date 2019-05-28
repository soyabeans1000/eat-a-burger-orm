const orm = require("../config/orm.js")


var burgers = {
    all: function(cb) {
      orm.all("burger_orders", function(res) {
        cb(res);
      });
    },
    create: function(name, cb) {
      orm.create("burger_orders", [
        "burger_name", "eaten"
      ], [
        name, false
      ], cb);
    },
    update: function(id, cb) {
      var condition = "burgerID=" + id;
      orm.update("burger_orders", {
        eaten: true
      }, condition, cb);
    }
  };
  

  

  

module.exports = burgers