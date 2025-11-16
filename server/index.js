const mongoose = require("mongoose");
require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const documentRoutes = require("./routes/documentRoutes");
app.use("/api/documents", documentRoutes);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("DB error", err));

const PORT = 5000;
app.listen(PORT, () => console.log("Server running on port", PORT));
