const express = require("express");
const router = express.Router();
const Document = require("../models/Document");

// CREATE
router.post("/", async (req, res) => {
  try {
    const doc = await Document.create(req.body);
    res.status(201).json(doc);
  } catch (error) {
    res.status(500).json({ message: "Failed to add document" });
  }
});

// READ ALL
router.get("/", async (req, res) => {
  try {
    const docs = await Document.find().sort({ createdAt: -1 });
    res.json(docs);
  } catch (error) {
    res.status(500).json({ message: "Failed to load documents" });
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    await Document.findByIdAndDelete(req.params.id);
    res.json({ message: "Document deleted" });
  } catch (error) {
    res.status(500).json({ message: "Delete failed" });
  }
});

module.exports = router;
