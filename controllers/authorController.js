// controllers/authorController.js

// import model
const Author = require("../models/author")

// Create Author
exports.createAuthor = async (req, res) => {
  const author = await Author.create(req.body);
  res.json(author);
};

// Get All Authors
exports.getAuthors = async (req, res) => {
  const authors = await Author.find();
  res.json(authors);
}

