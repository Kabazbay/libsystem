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
