// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import AllDocuments from "./pages/AllDocuments.jsx";
import AddDocument from "./pages/AddDocument.jsx";


function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Navbar />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Navigate to="/documents" replace />} />
            <Route path="/documents" element={<AllDocuments />} />
            <Route path="/add" element={<AddDocument />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
