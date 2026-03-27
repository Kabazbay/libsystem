// routes/studentRoutes.js

// import router and controller
const router = require("express").Router();
const ctrl = require("../controllers/studentController");

// routes
router.post("/", ctrl.createStudent);
router.get("/", ctrl.getStudents);

// export router
module.exports = router;