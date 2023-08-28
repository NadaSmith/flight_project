////////////////////////////////////////////////
// Our Models
////////////////////////////////////////////////
// pull schema and model from mongoose using object destructuring
const mongoose = require('../config/database');

const { Schema, model } = mongoose;
const Destination = require('./Destination');

// make flight schema
const flightsSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA'],
        default: 'SAN'
      },
      destination: [destinationSchema]
});

// make flight model
const Flight  = model('Flight', flightsSchema);

module.exports = Flight;