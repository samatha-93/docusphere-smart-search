import React from "react";
import "../styles/DocumentCard.css";

const DocumentCard = ({ doc, onDelete }) => {
  return (
    <article className="doc-card">
      <h3>{doc.title}</h3>
      <p>{doc.description}</p>
      <p className="doc-category">Category: {doc.category}</p>

      <div className="doc-actions">
        <a className="doc-link" href={doc.fileUrl} target="_blank">
          View File
        </a>

        <button className="doc-delete" onClick={() => onDelete(doc._id)}>
          Delete
        </button>
      </div>
    </article>
  );
};

export default DocumentCard;
