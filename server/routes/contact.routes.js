import express from "express";
import authCtrl from "../controllers/auth.controller.js";
import {
    createContact,
    getContacts,
    getContactById,
    updateContact,
    deleteContact,
    deleteAllContacts,
} from "../controllers/contact.controller.js";

const router = express.Router();

// Public: anyone can submit the contact form
router.post("/", createContact);

// Signed-in: can read
router.get("/", authCtrl.requireSignin, getContacts);
router.get("/:id", authCtrl.requireSignin, getContactById);

// Admin-only : can update and delete
router.put("/:id", authCtrl.requireSignin, updateContact);
router.delete("/:id", authCtrl.requireSignin, deleteContact);
router.delete("/", authCtrl.requireSignin, deleteAllContacts);

export default router;
