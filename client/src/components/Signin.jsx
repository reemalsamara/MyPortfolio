// Signin.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signin } from "../services/authService";

function Signin() {
    const navigate = useNavigate();
    const [form, setForm] = useState({ email: "", password: "" });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            const user = await signin(form);
            alert(`Welcome ${user.name || user.email}`);
            navigate("/");
        } catch (err) {
            console.error(err);
            setError("Invalid email or password");
        }
    };

    return (
        <div className="page auth">
            <div className="auth-card">
                <h2>Sign In</h2>
                <p className="auth-subtitle">Welcome back! Please enter your details.</p>

                <form onSubmit={handleSubmit} className="auth-form">
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
                            placeholder="Enter your password"
                            value={form.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {error && <p className="error-text">{error}</p>}

                    <button type="submit" className="auth-button">
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Signin;
