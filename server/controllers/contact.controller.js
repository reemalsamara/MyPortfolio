import Contact from "../models/contact.model.js";

// CREATE
export const createContact = async (req, res) => {
    try {
        const contact = await Contact.create(req.body);
        res.status(201).json(contact);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// READ ALL
export const getContacts = async (req, res) => {
    const contacts = await Contact.find();
    res.json(contacts);
};

// READ ONE
export const getContactById = async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ error: "Not found" });
    res.json(contact);
};

// UPDATE
export const updateContact = async (req, res) => {
    const updated = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
};

// DELETE ONE
export const deleteContact = async (req, res) => {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ message: "Contact deleted" });
};

// DELETE ALL
export const deleteAllContacts = async (req, res) => {
    await Contact.deleteMany();
    res.json({ message: "All contacts deleted" });
};
