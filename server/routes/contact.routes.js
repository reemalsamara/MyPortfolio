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

// 🌍 Public: anyone can submit the form
router.post("/", createContact);

// 🔒 Admin-only routes (require JWT)
router.get("/", authCtrl.requireSignin, getContacts);
router.get("/:id", authCtrl.requireSignin, getContactById);
router.put("/:id", authCtrl.requireSignin, updateContact);
router.delete("/:id", authCtrl.requireSignin, deleteContact);
router.delete("/", authCtrl.requireSignin, deleteAllContacts);

export default router;
