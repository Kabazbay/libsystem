// models/author.js

// import mongoose
const mongoose = require("mongoose");

// Author Schema
const authorSchema = new mongoose.Schema({
    name: {type: String, required: true},
    bio: {type: String, required: true},
},
    {timestamps: true}  
);

// Export Author Model
module.exports = mongoose.model("Author", authorSchema);