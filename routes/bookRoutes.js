// routes/bookRoutes.js

// import router and controller
const router = require("express").Router();
const ctrl = require("../controllers/bookController");

// routes
router.post("/", ctrl.createBook);
router.get("/", ctrl.getBooks);
router.get("/:id", ctrl.getBook);
router.put("/:id/borrow", ctrl.borrowBook);
router.put("/:id/return", ctrl.returnBook);
router.get("/author/:author", ctrl.getBookByAuthor);
router.get("/title/:title", ctrl.getBookByTitle);   
router.delete("/:id", ctrl.deleteBook);
router.delete("/", ctrl.deleteAllBooks);

// export router
module.exports = router;