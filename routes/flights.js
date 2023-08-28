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
router.get('/:id', (req, res) => {
    Flight.findById(req.params.id)
      .then(flight => {
        res.render('flightDetail', { flight });
      })
      .catch(error => {
        console.error(error);
        res.redirect('/flights');
    });
});


// Add a new route to handle adding destinations
router.post('/:id/add-destination', (req, res) => {
    Flight.findById(req.params.id)
      .then(flight => {
        const newDestination = {
          airport: req.body.newAirport,
          arrival: new Date(req.body.newArrivalDate)
        };
        flight.destinations.push(newDestination);
        return flight.save();
      })
      .then(savedFlight => {
        res.redirect(`/flights/${savedFlight._id}`);
      })
      .catch(error => {
        console.error(error);
        res.redirect(`/flights/${req.params.id}`);
      });
  });

//////////////////////////////////////////
// Export the Router
//////////////////////////////////////////
module.exports = router;