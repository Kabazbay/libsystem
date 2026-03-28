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

// get single student
exports.getStudent = async (req, res) => {
  const student = await Student.findById(req.params.id);
  res.json(student);
}

// update student
exports.updateStudent = async (req, res) => {
  const student = await Student.findByIdAndUpdate(req.params.id, req.body, { returnDocument: "after" });
  res.json(student);
}

// delete student
exports.deleteStudent = async (req, res) => {
  const student = await Student.findByIdAndDelete(req.params.id);
  res.json(student);
}

// get student by name
exports.getStudentByName = async (req, res) => {
  const student = await Student.find({ name: req.params.name });
  res.json(student);
}

// get student by studentID
exports.getStudentByStudentID = async (req, res) => {
  const student = await Student.find({ studentID: req.params.studentID });
  res.json(student);
}