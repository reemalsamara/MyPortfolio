import express from "express";
import {
    createProject,
    getProjects,
    getProjectById,
    updateProject,
    deleteProject,
    deleteAllProjects,
} from "../controllers/project.controller.js";

const router = express.Router();

// Create a new project
router.post("/", createProject);

// Get all projects
router.get("/", getProjects);

// Get a project by ID
router.get("/:id", getProjectById);

// Update a project by ID
router.put("/:id", updateProject);

// Delete a project by ID
router.delete("/:id", deleteProject);

// Delete all projects
router.delete("/", deleteAllProjects);

export default router;
