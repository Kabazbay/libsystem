// routes/studentRoutes.js

// import router and controller
const router = require("express").Router();
const ctrl = require("../controllers/studentController");

// routes
router.post("/", ctrl.createStudent);
router.get("/", ctrl.getStudents);
router.get("/:id", ctrl.getStudent);
router.put("/:id", ctrl.updateStudent);
router.delete("/:id", ctrl.deleteStudent);
router.get("/name/:name", ctrl.getStudentByName);
router.get("/studentID/:studentID", ctrl.getStudentByStudentID);

// export router
module.exports = router;