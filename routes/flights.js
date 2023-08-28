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
    Flight.find({})
      .then(foundFlight => {
        res.render('flights/Index', {
          flights: foundFlight
        });
      })
      .catch(error => res.status(400).json({ error }))
})

//NEW ROUTE
router.get('/new', (req, res) => {
    res.render('flight/new');
})

//DELETE ROUTE


//UPDATE ROUTE


//CREATE ROUTE


//EDIT ROUTE


//SHOW ROUTE