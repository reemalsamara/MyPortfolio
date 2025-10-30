import express from "express";
import {
    createContact,
    getContacts,
    getContactById,
    updateContact,
    deleteContact,
    deleteAllContacts,
} from "../controllers/contact.controller.js";
import authCtrl from "../controllers/auth.controller.js";

const router = express.Router();

//  Public routes – anyone can view
router.get("/", getContacts);
router.get("/:id", getContactById);

// Protected routes – only admin can create/update/delete
router.post("/", authCtrl.requireSignin, (req, res, next) => {
    if (req.auth.role !== "admin") {
        return res.status(403).json({ error: "Admins only can create contacts" });
    }
    next();
}, createContact);

router.put("/:id", authCtrl.requireSignin, (req, res, next) => {
    if (req.auth.role !== "admin") {
        return res.status(403).json({ error: "Admins only can update contacts" });
    }
    next();
}, updateContact);

router.delete("/:id", authCtrl.requireSignin, (req, res, next) => {
    if (req.auth.role !== "admin") {
        return res.status(403).json({ error: "Admins only can delete contacts" });
    }
    next();
}, deleteContact);

router.delete("/", authCtrl.requireSignin, (req, res, next) => {
    if (req.auth.role !== "admin") {
        return res.status(403).json({ error: "Admins only can delete all contacts" });
    }
    next();
}, deleteAllContacts);

export default router;
