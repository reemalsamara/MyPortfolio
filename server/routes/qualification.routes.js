import express from "express";
import {
    createQualification,
    getQualifications,
    getQualificationById,
    updateQualification,
    deleteQualification,
    deleteAllQualifications,
} from "../controllers/qualification.controller.js";

const router = express.Router();

// Create a new qualification
router.post("/", createQualification);

// Get all qualifications
router.get("/", getQualifications);

// Get qualification by ID
router.get("/:id", getQualificationById);

// Update qualification by ID
router.put("/:id", updateQualification);

// Delete qualification by ID
router.delete("/:id", deleteQualification);

// Delete all qualifications
router.delete("/", deleteAllQualifications);

export default router;
