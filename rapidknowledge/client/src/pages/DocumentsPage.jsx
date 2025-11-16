import React, { useEffect, useState } from "react";
import { getDocuments, deleteDocument } from "../services/api";
import DocumentCard from "../components/DocumentCard";
import "../styles/DocumentPage.css";

const DocumentsPage = () => {
  const [docs, setDocs] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadDocuments = async () => {
    try {
      const data = await getDocuments();
      setDocs(data);
    } catch (error) {
      console.error("Failed to load documents:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDocuments();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDocument(id);
      setDocs((prev) => prev.filter((doc) => doc._id !== id));
    } catch (error) {
      console.error("Failed to delete:", error);
    }
  };

  return (
    <section className="doc-page">
      <h1 className="doc-title">All Documents</h1>

      {loading && <p className="doc-empty">Loading documents...</p>}

      {!loading && docs.length === 0 && (
        <p className="doc-empty">No documents found.</p>
      )}

      <div className="doc-list">
        {docs.map((doc) => (
          <DocumentCard
            key={doc._id}
            doc={doc}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </section>
  );
};

export default DocumentsPage;