const express = require("express");
const { auth: ctrl } = require("../../controllers");
const { userSchema: joi } = require("../../schemas");
const { auth } = require("../../middlewares");

const router = express.Router();

router.post("/signup", joi.signUp, ctrl.signup);
router.post("/login", joi.login, ctrl.login);
router.get("/current", auth, ctrl.getCurrentUser);
router.get("/logout", auth, ctrl.logout);
router.patch("/edit", auth, joi.update, ctrl.updateUser);

// router.get("/google", ctrl.googleAuth);
// router.get("/google-redirect", ctrl.googleRedirect);

module.exports = router;
