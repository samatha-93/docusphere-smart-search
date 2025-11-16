import React, { useEffect, useState } from "react";
import API from "../services/api";
import DocumentCard from "../components/DocumentCard";
import "../styles/DocumentPage.css";

const AllDocuments = () => {
  const [docs, setDocs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const loadDocs = async () => {
      try {
        const res = await API.get("/documents");
        setDocs(res.data);
      } catch (err) {
        alert("Failed to load documents");
      } finally {
        setLoading(false);
      }
    };

    loadDocs();
  }, []);

  const handleDelete = async (id) => {
    try {
      await API.delete(`/documents/${id}`);
      setDocs(docs.filter((doc) => doc._id !== id));
    } catch (err) {
      alert("Delete failed.");
    }
  };

  const filteredDocs = docs.filter((doc) => {
    const matchesCategory =
      category === "All" ? true : doc.category.toLowerCase() === category.toLowerCase();

    const matchesSearch = doc.title.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section className="doc-container">

      <h1 className="doc-title">All Documents</h1>

      <p className="doc-subtitle">
        Search across internal decks, briefs and resources.
      </p>

      <div className="filter-bar">
  <div className="search-container">
    <input
      type="text"
      placeholder="Search documents..."
      onChange={(e) => setSearch(e.target.value)}
    />
  </div>

  <select
    className="category-dropdown"
    onChange={(e) => setCategory(e.target.value)}
  >
    <option value="All">All</option>

    {/* Dynamic categories */}
    {docs.map((doc) => (
      <option key={doc._id} value={doc.category}>
        {doc.category}
      </option>
    ))}
  </select>
</div>


      {loading && <p className="doc-empty">Loading documents...</p>}

      {!loading && filteredDocs.length === 0 && (
        <p className="doc-empty">No documents found.</p>
      )}

      <div className="doc-list">
        {filteredDocs.map((doc) => (
          <DocumentCard key={doc._id} doc={doc} onDelete={handleDelete} />
        ))}
      </div>

    </section>
  );
};

export default AllDocuments;
