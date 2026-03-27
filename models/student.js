// models/student.js

const mongoose = require("mongoose");

// student schema
const studentSchema = new mongoose.Schema({
    name: String,
    email: String,
    studentID: String,
    
}, { timestamps: true });

// export model
module.exports = mongoose.model("Student", studentSchema);