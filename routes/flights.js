////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////
const express = require("express");
const Flight = require("../models/Flight.js");

/////////////////////////////////////////
// Create Route
/////////////////////////////////////////
const router = express.Router();

/////////////////////////////////////////
// Routes
/////////////////////////////////////////

//INDUCES Nmononic 

//INDEX ROUTE
router.get('/', (req, res) => {
    Flight.find().sort('departs')
      .then(flights => {
        res.render('flights/Index', { flights });
      })
      .catch(error => res.status(400).json({ error }))
})

//NEW ROUTE
router.get('/new', (req, res) => {
    //create a default departure date
    const newFlight = new Flight ();
    const departsDate = newFlight.departs.toISOString().slice(0, 16);

    res.render('flight/new', { departsDate });
})

//DELETE ROUTE


//UPDATE ROUTE


//CREATE ROUTE
router.post('/', (req, res) => {
    const { airline, flightNo, departs } = req.body;
    const newFlight = new Flight({ airline, flightNo, departs });
    newFlight.save()
      .then(data => res.redirect('/flights'))
      .catch(error => res.status(400).json({ error }));
});


//EDIT ROUTE


//SHOW ROUTE


//////////////////////////////////////////
// Export the Router
//////////////////////////////////////////
module.exports = router;