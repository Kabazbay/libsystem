// config/database.js

// import mongoose
const mongoose = require("mongoose");

// load environment variables
require("dotenv").config();

// connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.mongoDB);
        console.log("MongoDB connected");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

// export connectDB
module.exports = connectDB;





// mongoose.connect("mongodb://localhost:27017/libraryDB")
//   .then(() => console.log("DB connected"))
//   .catch(err => console.log(err));
