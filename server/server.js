const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/studyhub");

app.get("/api/sessions", (req, res) => {
  res.json([{ subject: "Math", hours: 2 }]);
});

app.listen(4000, () => console.log("Server running on 4000"));
