import { useNavigate } from "react-router-dom";

function Contact() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you! Your message has been submitted.");
        navigate("/"); // Redirect back to Home
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
                    <input type="text" placeholder="First Name" required />
                    <input type="text" placeholder="Last Name" required />
                    <input type="email" placeholder="Email" required />
                    <input type="tel" placeholder="Contact Number" />
                    <textarea placeholder="Message" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
