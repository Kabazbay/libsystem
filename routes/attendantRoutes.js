// routes/attendantRoutes.js

// import router and controller
const router = require("express").Router();
const ctrl = require("../controllers/attendantController");

// routes
router.post("/", ctrl.createAttendant);
router.get("/", ctrl.getAttendants);
router.get("/:id", ctrl.getAttendant);
router.put("/:id", ctrl.updateAttendant);
router.delete("/:id", ctrl.deleteAttendant);
router.get("/name/:name", ctrl.getAttendantByName);
router.get("/staffID/:staffID", ctrl.getAttendantByStaffID);

// export router
module.exports = router;