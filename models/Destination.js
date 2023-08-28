const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const destinationSchema = new Schema({
  airport: {
    type: String,
    enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA']
  },
  arrival: Date
});

const Destination = model("Destination", destinationSchema)

module.exports = Destination;