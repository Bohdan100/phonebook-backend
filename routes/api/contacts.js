const express = require("express");

const { auth } = require("../../middlewares");
const { contacts: ctrl } = require("../../controllers");
const { contactSchema: joi } = require("../../schemas");

const router = express.Router();

router.get("/", auth, ctrl.getAll);

router.get("/search", auth, ctrl.findByName);

router.post("/", auth, joi.add, ctrl.add);

router.patch("/:contactId", auth, joi.update, ctrl.update);

// router.patch(
//   "/:contactId/favorite",
//   auth,
//   contactSchema.updateStatus,
//   ctrl.updateStatus
// );

router.delete("/:contactId", auth, ctrl.remove);

module.exports = router;
