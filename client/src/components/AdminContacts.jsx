// AdminContacts.jsx
import { useEffect, useState } from "react";
import api from "../services/api";

function AdminContacts() {
    const [contacts, setContacts] = useState([]);
    const [error, setError] = useState("");

    const user = JSON.parse(localStorage.getItem("user") || "null");

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const res = await api.get("/contacts"); // requires token
                setContacts(res.data);
            } catch (err) {
                console.error(err);
                setError("Failed to load contacts. Are you signed in as admin?");
            }
        };
        fetchContacts();
    }, []);

    const handleDelete = async (id) => {
        if (!window.confirm("Delete this contact?")) return;
        try {
            await api.delete(`/contacts/${id}`);
            setContacts((prev) => prev.filter((c) => c._id !== id));
        } catch (err) {
            console.error(err);
            alert("Failed to delete contact");
        }
    };

    if (!user || user.role !== "admin") {
        return <p>Access denied. Admins only.</p>;
    }

    return (
        <div className="page admin-contacts">
            <h2>Admin – Contacts</h2>
            {error && <p className="error-text">{error}</p>}
            <table>
                <thead>
                    <tr>
                        <th>Name</th><th>Email</th><th>Phone</th><th>Message</th><th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((c) => (
                        <tr key={c._id}>
                            <td>{c.firstName} {c.lastName}</td>
                            <td>{c.email}</td>
                            <td>{c.phone}</td>
                            <td>{c.message}</td>
                            <td>
                                <button onClick={() => handleDelete(c._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AdminContacts;
