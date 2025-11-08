require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello from Node REST API! for Vercel test deployment" });
});

app.get("/ping", (req, res) => {
  res.json({ message: "welcome to ping pong game" });
});

app.post("/echo", (req, res) => {
  res.json({ youSent: req.body });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`URL: http://localhost:${PORT}`);
});
