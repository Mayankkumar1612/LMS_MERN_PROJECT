const mongoose = require("mongoose");

const ExamSupritendentSchema = new mongoose.Schema({
  esCode: { type: String, required: true, unique: true },
  esName: { type: String, required: true },
  esSex: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  education: { type: String, required: true },
  experience: { type: String, required: true },
  jobType: { type: String, required: true },
  address: { type: String, required: true },
  countryId: { type: String, required: true },
  stateId: { type: String, required: true },
  city: { type: String, required: true },
});

module.exports = mongoose.model("ExamSupritendent", ExamSupritendentSchema);
