// models/book.js

// import mongoose
const mongoose = require("mongoose");

// book schema
const bookSchema = new mongoose.Schema({
    title: {type: String, required: true},
    isbn: {type: String, unique: true, required: true},
    authors: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Author"
    }],
    status: {
        type: String,
        default: "IN",
        enum: ["IN", "OUT"]
    },
    borrowedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
        default: null
    },
    issuedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Attendant",
        default: null
    },
    returnDate: {
        type: Date,
        default: null
    } 
}, { timestamps: true });


// export model
module.exports = mongoose.model("Book", bookSchema);
    