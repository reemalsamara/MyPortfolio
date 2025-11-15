import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar"
import './style.css';
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import AdminContacts from "./components/AdminContacts";



function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin/contacts" element={<AdminContacts />} />

      </Routes>
    </Router>
  );
}

export default App;