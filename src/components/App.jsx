import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import {Navbar, Nav} from "react-bootstrap";


export default function App() {
    return (
        <Router>
            <div>
                <Navbar fixed="top" className="nav body-font">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                </Navbar>

                <Routes>
                    <Route path="/about" element={<About />}>
                    </Route>
                    <Route path="/contact" element={<Contact />}>
                    </Route>
                    <Route path="/" element={<Home />}>
                    </Route>
                </Routes>
            </div>
        </Router>
    );
}