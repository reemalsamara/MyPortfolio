
import express from "express";
import authCtrl from "../controllers/auth.controller.js";
const router = express.Router();

router.route("/signin").post(authCtrl.signin);
router.route("/signout").get(authCtrl.signout);
router.get("/protected", authCtrl.requireSignin, (req, res) => {
    res.json({ message: "You are logged in!" });
});

export default router;
