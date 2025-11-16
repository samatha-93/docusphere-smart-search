// src/pages/AddDocument.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addDocument } from "../services/api";
import "../styles/AddDocument.css";

const AddDocument = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    fileUrl: "",
  });
  const [saving, setSaving] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.title.trim() || !form.description.trim()) {
      alert("Please fill in title and description.");
      return;
    }

    try {
      setSaving(true);
      await addDocument(form);
      alert("Document added successfully!");
      navigate("/documents");
    } catch (err) {
      console.error(err);
      alert("Failed to add document.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <section className="page-shell">
      <div className="panel add-panel">
        <header className="panel-header">
          <div>
            <h1 className="panel-title">Add New Knowledge</h1>
            <p className="panel-subtitle">
              Save marketing docs, decks and playbooks in one place for quick
              access.
            </p>
          </div>
        </header>

        <div className="add-layout">
          <form className="add-form" onSubmit={handleSubmit}>
            <label className="field">
              <span className="field-label">Title</span>
              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Marketing Strategy Guide"
              />
            </label>

            <label className="field">
              <span className="field-label">Description</span>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Short summary so teammates know what this doc is about."
                rows={3}
              />
            </label>

            <label className="field">
              <span className="field-label">Category</span>
              <input
                name="category"
                value={form.category}
                onChange={handleChange}
                placeholder="Marketing, Sales, Product…"
              />
            </label>

            <label className="field">
              <span className="field-label">File URL</span>
              <input
                name="fileUrl"
                value={form.fileUrl}
                onChange={handleChange}
                placeholder="https://example.com/my-file.pdf"
              />
            </label>

            <button type="submit" className="primary-btn" disabled={saving}>
              {saving ? "Adding…" : "Add Document"}
            </button>
          </form>

          <aside className="add-aside">
            <p className="aside-tag">Smart Internal Search</p>
            <h2 className="aside-title">One place for all marketing knowledge</h2>
            <p className="aside-text">
              DocuSphere helps marketing teams quickly discover decks, briefs,
              and campaign assets without digging through endless folders.
            </p>
            <ul className="aside-list">
              <li>Fast search across title, description &amp; category</li>
              <li>Clean UI optimized for quick access</li>
              <li>Ready for real marketing teams to use</li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default AddDocument;
