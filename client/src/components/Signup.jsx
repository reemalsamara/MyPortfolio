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
        } catch (err) {
            console.error("Signup error:", err);

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
            <div className="auth-card">
                <h2>Create Account</h2>
                <p className="auth-subtitle">Join us — it only takes a moment.</p>

                <form onSubmit={handleSubmit} className="auth-form">

                    <div className="auth-field">
                        <label htmlFor="name">Full Name</label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Enter your full name"
                            value={form.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="auth-field">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="you@example.com"
                            value={form.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="auth-field">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Create a strong password"
                            value={form.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {error && <p className="error-text">{error}</p>}

                    <button type="submit" className="auth-button">
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Signup;
