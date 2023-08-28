////////////////////////////////////////////////
// Our Models
////////////////////////////////////////////////
// pull schema and model from mongoose using object destructuring
const mongoose = require('../config/database');

const { Schema, model } = mongoose;

// make fruits schema
const flightsSchema = new Schema({
    airline: String,
    flightNo: Number,
    departs: Date,
});

// make snack model
const Flight  = model('Flight', flightsSchema);

module.exports = Flight;