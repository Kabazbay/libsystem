// routes/authorRoutes.js

// import router and controller
const router = require("express").Router();
const ctrl = require("../controllers/authorController");

// routes
router.post("/", ctrl.createAuthor);
router.get("/", ctrl.getAuthors);
router.get("/:id", ctrl.getAuthor);
router.put("/:id", ctrl.updateAuthor);
router.delete("/:id", ctrl.deleteAuthor);
router.get("/name/:name", ctrl.getAuthorByName);

// export router
module.exports = router;


