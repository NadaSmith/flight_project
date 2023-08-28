/////////////////////////////////////////////
// Import Our Dependencies
/////////////////////////////////////////////
require("dotenv").config(); // Load ENV Variables
const express = require("express"); // import express
const morgan = require("morgan"); //import morgan
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const path = require("path"); // built in node module we use to resolve paths more on this when we use it
const Flight = require('./models/Flight.js'); // Adjust the path as needed

/////////////////////////////////////////////////
// Create our Express Application Object 
/////////////////////////////////////////////////
const app = express();
app.engine('jsx', require('express-react-views').createEngine());
app.set('view engine', 'jsx')

/////////////////////////////////////////////////////
// Middleware
/////////////////////////////////////////////////////
app.use(morgan('tiny')); //logging
app.use(methodOverride('_method')); //override for put and delete requests from forms
app.use(express.urlencoded({ extended: true})); //parse data sent in the body to make it usable in our app
app.use(express.static('public')); //serves files from public statically

////////////////////////////////////////////
// Routes
////////////////////////////////////////////
//dummy route
app.get("/", (req, res) => {
    res.send("your server is running... better catch it.");
});

app.use('/flights', require('./routes/flights'))


//////////////////////////////////////////////
// Server Listener
//////////////////////////////////////////////
const PORT = process.env.PORT || 3000;  //last part checks for the port specified and if not then automatically puts on 3000
app.listen(PORT, () => console.log(`Now Listening on port ${PORT}`));