import Qualification from "../models/qualification.model.js";

// CREATE
export const createQualification = async (req, res) => {
    try {
        const qualification = await Qualification.create(req.body);
        res.status(201).json(qualification);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// READ ALL
export const getQualifications = async (req, res) => {
    try {
        const qualifications = await Qualification.find();
        res.json(qualifications);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// READ ONE
export const getQualificationById = async (req, res) => {
    try {
        const qualification = await Qualification.findById(req.params.id);
        if (!qualification)
            return res.status(404).json({ error: "Qualification not found" });
        res.json(qualification);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// UPDATE
export const updateQualification = async (req, res) => {
    try {
        const updated = await Qualification.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.json(updated);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// DELETE ONE
export const deleteQualification = async (req, res) => {
    try {
        await Qualification.findByIdAndDelete(req.params.id);
        res.json({ message: "Qualification deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// DELETE ALL
export const deleteAllQualifications = async (req, res) => {
    try {
        await Qualification.deleteMany();
        res.json({ message: "All qualifications deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
