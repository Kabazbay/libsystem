// server.js

// import routes
const express = require("express");
const connectDB = require("./config/database");


const app = express();

// allows you send JSON in Postman
app.use(express.json());

// connect to your local MongoDB
connectDB();

// test route
app.get("/", (req, res) => {
    res.send("Library API is running!!");
});

// Author routes
app.use("/authors", require("./routes/authorRoutes"));

// Student routes
app.use("/students", require("./routes/studentRoutes"));

// Attendant routes
app.use("/attendants", require("./routes/attendantRoutes"));

// Book routes
app.use("/books", require("./routes/bookRoutes"));

// Start server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

