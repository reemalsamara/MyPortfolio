// server/routes/user.routes.js
import express from "express";
import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  deleteAllUsers,
} from "../controllers/user.controller.js";
import authCtrl from "../controllers/auth.controller.js";

const router = express.Router();

//  Public routes
router.post("/", createUser);
router.get("/", getUsers);

//  Protected test route 
router.get("/protected", authCtrl.requireSignin, (req, res) => {
  res.json({ message: "Access granted. You are authorized!" });
});

//  Routes that require sign-in
router.get("/:id", authCtrl.requireSignin, getUserById);
router.put("/:id", authCtrl.requireSignin, updateUser);
router.delete("/:id", authCtrl.requireSignin, deleteUser);

//  Admin utility (also protected)
router.delete("/", authCtrl.requireSignin, deleteAllUsers);

export default router;
