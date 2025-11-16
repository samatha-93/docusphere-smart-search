

const mongoose = require("mongoose");

const DocumentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    category: {
      type: String,
      required: true,
    },
    fileUrl: {
      type: String, // For future file upload
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Document", DocumentSchema);
