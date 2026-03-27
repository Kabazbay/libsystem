// routes/authorRoutes.js

// import router and controller
const router = require("express").Router();
const ctrl = require("../controllers/authorController");

// routes
router.post("/", ctrl.createAuthor);
router.get("/", ctrl.getAuthors);

// export router
module.exports = router;


