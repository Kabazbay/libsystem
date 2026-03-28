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

// get single author
exports.getAuthor = async (req, res) => {
  const author = await Author.findById(req.params.id);
  res.json(author);
}

// update author
exports.updateAuthor = async (req, res) => {
  const author = await Author.findByIdAndUpdate(req.params.id, req.body, { returnDocument: "after" });
  res.json(author);
}

// delete author
exports.deleteAuthor = async (req, res) => {
  const author = await Author.findByIdAndDelete(req.params.id);
  res.json(author);
}

// get author by name
exports.getAuthorByName = async (req, res) => {
  const author = await Author.find({ name: req.params.name });
  res.json(author);
}


