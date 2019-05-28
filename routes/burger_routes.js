const db = require('../config')
const orm = require('../config/orm.js')
const burgers = require('../models/burgers.js')

module.exports = app => {
  
  app.get("*", function(req, res) {
    burgers.all(function(data) {
      var burgersObject = {
        orders: data
      };
      res.render("index", burgersObject);
    });
  });

  app.get("/burgers", function(req, res) {
    burgers.all(function(data) {
      var burgersObject = {
        orders: data
      };
      res.render("index", burgersObject);
    });
  });


  // Add New Burger Order
app.post('/burgers', (req, res) => {   
   burgers.create(req.body.burger_name, function(result) {
    // Send back the ID of the new quote
    console.log("Burger Added!")
    res.send('ok')
  });
})

  // // Update
  // app.put('/burgers/:id', (req, res) => {   
  //   db.query(`UPDATE burger_orders SET eaten = true WHERE burgerID = ${req.params.id}`, e => {
  //     if (e) throw e
  //    
  //   })
  // })



 // Update
   app.put('/burgers/:id', (req, res) => {   
    burgers.update(req.params.id, function(result) {     
      console.log('Upated')
      res.send('updated')
     })
     })


}
