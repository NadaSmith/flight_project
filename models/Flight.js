////////////////////////////////////////////////
// Our Models
////////////////////////////////////////////////
// pull schema and model from mongoose using object destructuring
const mongoose = require('../config/database');

const { Schema, model } = mongoose;

// make flight schema
const flightsSchema = new Schema({
    airline: String,
    flightNo: Number,
    departs: Date,
});

// make flight model
const Flight  = model('Flight', flightsSchema);

module.exports = Flight;