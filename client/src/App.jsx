import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./style.css";

// Eager (small) components – can stay as normal imports if you like
// But I'll lazy-load everything except NavBar just to show the pattern:

const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const Education = lazy(() => import("./components/Education"));
const Services = lazy(() => import("./components/Services"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const Signin = lazy(() => import("./components/Signin"));
const Signup = lazy(() => import("./components/Signup"));
const AdminContacts = lazy(() => import("./components/AdminContacts"));

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <NavBar />
      {/* Suspense shows fallback while lazy components are loading */}
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </Router>
  );
}

export default App;
