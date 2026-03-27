// models/attendant.js

// import mongoose
const mongoose = require("mongoose");

// create schema
const attendantSchema = new mongoose.Schema({
    name: String,
    staffID: String,
    
}, { timestamps: true });

// export model
module.exports = mongoose.model("Attendant", attendantSchema);

