import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";
import "./App.css";

function App() {
    return (
        <Router>
            <header className="header">
                <div className="header__name">Dit Navn</div>
                <nav>
                    <Link to="/" className="nav__link">Forside</Link>
                    <Link to="/projekter" className="nav__link">Projekter</Link>
                    <Link to="/kontakt" className="nav__link">Kontakt</Link>
                </nav>
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projekter" element={<Projects />} />
                    <Route path="/kontakt" element={<Contact />} />
                </Routes>
            </main>
        </Router>
    );
}
// Export the App component as the default export

export default App;