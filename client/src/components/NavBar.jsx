// client/src/components/NavBar.jsx
import { Link, useNavigate } from "react-router-dom";
import { signout } from "../services/authService";

function NavBar() {
    const navigate = useNavigate();

    //  Read user from localStorage every render
    let user = null;
    const stored = localStorage.getItem("user");
    if (stored) {
        try {
            user = JSON.parse(stored);
        } catch {
            user = null;
        }
    }

    const handleSignout = async () => {
        try {
            await signout();
        } catch (err) {
            console.error("Error signing out:", err);
        }
        // After signout, localStorage is cleared in authService
        navigate("/"); // this will cause a re-render and user will be null
    };

    return (
        <nav className="navbar">
            <div className="nav-left">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/education">Education</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/services">Services</Link>
                <Link to="/contact">Contact</Link>

                {/* Admin-only link */}
                {user && user.role === "admin" && (
                    <Link to="/admin/contacts">Admin Contacts</Link>
                )}
            </div>

            <div className="nav-right">
                {/* Not logged in → show Sign In / Sign Up */}
                {!user && (
                    <>
                        <Link to="/signin">Sign In</Link>
                        <Link to="/signup">Sign Up</Link>
                    </>
                )}

                {/* Logged in → show Welcome + Sign Out */}
                {user && (
                    <>
                        <span className="nav-user">
                            {user.name ? `Welcome, ${user.name}` : user.email}
                        </span>
                        <button onClick={handleSignout}>Sign Out</button>
                    </>
                )}
            </div>
        </nav>
    );
}

export default NavBar;
