const mongoose = require("mongoose");

const ExamCentreSchema = new mongoose.Schema({
  esCode: { type: String, required: true, unique: true },
  centreName: { type: String, required: true },
  examDate: { type: Date, required: true },
  cityName: { type: String, required: true },
  stateid: { type: String, required: true },
  countryid: { type: String, required: true },
});

module.exports = mongoose.model("ExamCentre", ExamCentreSchema);