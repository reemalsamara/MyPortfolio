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
            // If admin, you can navigate to an admin page
            navigate("/");
        } catch (err) {
            console.error(err);
            setError("Invalid email or password");
        }
    };

    return (
        <div className="page auth">
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit} className="auth-form">
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
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
}

export default Signin;
