import Contact from "../models/contact.model.js";

//  CREATE — Admin only
export const createContact = async (req, res) => {
    try {
        // Optional role check (if handled here instead of route)
        if (req.auth && req.auth.role !== "admin") {
            return res.status(403).json({ error: "Only admin can create contacts" });
        }

        const contact = await Contact.create(req.body);
        res.status(201).json(contact);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

//  READ ALL — Public
export const getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.json(contacts);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch contacts" });
    }
};

//  READ ONE — Public
export const getContactById = async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        if (!contact) return res.status(404).json({ error: "Contact not found" });
        res.json(contact);
    } catch (err) {
        res.status(400).json({ error: "Invalid ID format" });
    }
};

//  UPDATE — Admin only
export const updateContact = async (req, res) => {
    try {
        if (req.auth && req.auth.role !== "admin") {
            return res.status(403).json({ error: "Only admin can update contacts" });
        }

        const updated = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updated) return res.status(404).json({ error: "Contact not found" });
        res.json(updated);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

//  DELETE ONE — Admin only
export const deleteContact = async (req, res) => {
    try {
        if (req.auth && req.auth.role !== "admin") {
            return res.status(403).json({ error: "Only admin can delete contacts" });
        }

        const deleted = await Contact.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ error: "Contact not found" });
        res.json({ message: "Contact deleted" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

//  DELETE ALL — Admin only
export const deleteAllContacts = async (req, res) => {
    try {
        if (req.auth && req.auth.role !== "admin") {
            return res.status(403).json({ error: "Only admin can delete all contacts" });
        }

        await Contact.deleteMany();
        res.json({ message: "All contacts deleted" });
    } catch (err) {
        res.status(500).json({ error: "Failed to delete all contacts" });
    }
};
