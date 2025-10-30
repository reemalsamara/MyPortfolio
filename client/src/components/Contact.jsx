import { useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../services/api";

function Contact() {
    const navigate = useNavigate();

    //  Step 1: Manage form state
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    });

    //  Step 2: Handle input changes
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    //  Step 3: Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Send data to backend API (POST /api/contacts)
            await api.post("/contacts", form);

            alert(" Thank you! Your message has been saved to the database.");
            navigate("/"); // Redirect back to Home
        } catch (err) {
            console.error("Error submitting contact form:", err);
            alert(" Failed to send message. Please try again later.");
        }
    };

    return (
        <div className="page contact">
            <div className="contact-wrapper">
                {/* Contact Info Panel */}
                <div className="contact-panel">
                    <h3>My Contact Information</h3>
                    <p><strong>Email:</strong> reemalsamara@gmail.com</p>
                    <p><strong>Phone:</strong> +1 4375800500</p>
                    <p><strong>Location:</strong> Toronto, ON, Canada</p>
                </div>

                {/* Contact Form */}
                <form className="contact-form" onSubmit={handleSubmit}>
                    <input
                        name="firstName"
                        type="text"
                        placeholder="First Name"
                        value={form.firstName}
                        onChange={handleChange}
                        required
                    />
                    <input
                        name="lastName"
                        type="text"
                        placeholder="Last Name"
                        value={form.lastName}
                        onChange={handleChange}
                        required
                    />
                    <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        name="phone"
                        type="tel"
                        placeholder="Contact Number"
                        value={form.phone}
                        onChange={handleChange}
                    />
                    <textarea
                        name="message"
                        placeholder="Message"
                        value={form.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
