const mongoose = require('mongoose');

const CentreSchema = new mongoose.Schema({
  centreCode: { type: String, required: true, unique: true },
  centreName: { type: String, required: true },
  centerCountry: { type: String, required: true },
  centerState: { type: String, required: true },
  centreCity: { type: String, required: true },
});

module.exports = mongoose.model('Center.models', CentreSchema);