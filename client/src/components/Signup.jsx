// src/pages/Signup.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Signup() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await api.post("/users", form);
            alert("Account created! Please sign in.");
            navigate("/signin");
        }
        catch (err) {
            console.error("Signup error:", err);

            // Try to read error message from backend
            if (err.response && err.response.data) {
                const msg =
                    err.response.data.error ||
                    err.response.data.message ||
                    JSON.stringify(err.response.data);
                setError(msg);
            } else {
                setError("Could not sign up. Please try again.");
            }
        }

    };

    return (
        <div className="page auth">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit} className="auth-form">
                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                    required
                />
                {error && <p className="error-text">{error}</p>}
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default Signup;
