// controllers/studentController.js

// import model
const Student = require("../models/student");

// create student
exports.createStudent = async (req, res) => {
  const student = await Student.create(req.body);
  res.json(student);
};

// Get All Students
exports.getStudents = async (req, res) => {
  const students = await Student.find();
  res.json(students);
}