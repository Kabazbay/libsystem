// routes/attendantRoutes.js

// import router and controller
const router = require("express").Router();
const ctrl = require("../controllers/attendantController");

// routes
router.post("/", ctrl.createAttendant);
router.get("/", ctrl.getAttendants);

// export router
module.exports = router;