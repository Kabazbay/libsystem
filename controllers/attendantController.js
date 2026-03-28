// controllers/attendantController.js

// import model
const Attendant = require("../models/attendant");

// create attendant
exports.createAttendant = async (req, res) => {
  const attendant = await Attendant.create(req.body);
  res.json(attendant);
};

// Get All Attendants
exports.getAttendants = async (req, res) => {
  const attendants = await Attendant.find();
  res.json(attendants);
}

// get single attendant
exports.getAttendant = async (req, res) => {
  const attendant = await Attendant.findById(req.params.id);
  res.json(attendant);
}

// update attendant
exports.updateAttendant = async (req, res) => {
  const attendant = await Attendant.findByIdAndUpdate(req.params.id, req.body, { returnDocument: "after" });
  res.json(attendant);
}

// delete attendant
exports.deleteAttendant = async (req, res) => {
  const attendant = await Attendant.findByIdAndDelete(req.params.id);
  res.json(attendant);
}

// get attendant by name
exports.getAttendantByName = async (req, res) => {
  const attendant = await Attendant.find({ name: req.params.name });
  res.json(attendant);
}

// get attendant by staffID
exports.getAttendantByStaffID = async (req, res) => {
  const attendant = await Attendant.find({ staffID: req.params.staffID });
  res.json(attendant);
}
