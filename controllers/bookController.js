// controllers/bookController.js

// import model
const Book = require("../models/book");

// Create Book
exports.createBook = async (req, res) => {
  try {
    const { title, isbn, authors, status, borrowedBy, issuedBy, returnDate } = req.body;

    // check duplicate
    const existingISBN = await Book.findOne({ isbn });
    if (existingISBN) {
      return res.status(400).json({ message: "ISBN already exists" });
    }

    const book = await Book.create({ title, isbn, authors });

    res.json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get All Books
exports.getBooks = async (req, res) => {
  const books = await Book.find().populate("authors");
  res.json(books);
};

// Get Single Book
exports.getBook = async (req, res) => {
  const book = await Book.findById(req.params.id)
  .populate("authors")
  .populate("borrowedBy")
  .populate("issuedBy")

  res.json(book);
};

// // borrow book
// exports.borrowBook = async (req, res) => {
//   const book = await Book.findById(req.params.id);

//   if (book.status === "OUT") {
//     return res.json({ message: "Already borrowed" });
//   }

//   book.status = "OUT";
//   book.borrowedBy = req.body.studentId;
//   book.issuedBy = req.body.attendantId;
//   book.returnDate = req.body.returnDate;

//   await book.save();

//   res.json(book);
// };

// borrow book mr kachi (better version; update method)
exports.borrowBook = async (req, res) => {
  try {
        const {studentId, attendantId, returnDate} = req.body;

        // check if student exists
        const student = await Student.findById(studentId);
        if(!student) {
          return res.status(404).json({message: "Student not found"});
        }

        // check if attendant exists
        const attendant = await Attendant.findById(attendantId);
        if(!attendant) {
          return res.status(404).json({message: "Attendant not found"});
        }


        const bookId = req.params.id;
        const book = await Book.findById(bookId);
        
        if(!book) {
          return res.status(404).json({message: "Book not found"});
        }

        if(book.status === "OUT") {
          return res.status(400).json({message: "Book is already borrowed"});
        }

        book.status = "OUT";
        book.borrowedBy = studentId;
        book.issuedBy = attendantId;
        book.returnDate = returnDate;

        await book.save();
        return res.status(200).json({message: "Book borrowed successfully"});
        // res.json(book);

  } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Internal server error"});
  }
}

// return book
exports.returnBook = async (req, res) => {
  const book = await Book.findById(req.params.id);

  if (book.status === "IN") {
    return res.json({ message: "Already returned" });
  }

  book.status = "IN";
  book.borrowedBy = null;
  book.issuedBy = null;
  book.returnDate = null;

  await book.save();

  res.json(book);
};
  
  