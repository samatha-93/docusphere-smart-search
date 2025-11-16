// src/components/Navbar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <header className="navbar">
      <Link to="/documents" className="nav-logo">
        DocuSphere
      </Link>

      <nav className="nav-links">
        <Link
          to="/documents"
          className={`nav-item ${
            pathname === "/documents" ? "nav-item-active" : ""
          }`}
        >
          All Documents
        </Link>
        <Link
          to="/add"
          className={`nav-item ${pathname === "/add" ? "nav-item-active" : ""}`}
        >
          Add Document
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
