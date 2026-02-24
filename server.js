const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

connectDB();

const app = express();
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(cors());

// Debug middleware
app.use((req, res, next) => {
  console.log("Request:", req.method, req.path);
  console.log("Body:", req.body);
  next();
});

app.use("/api/students", require("./routes/studentRoutes"));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});