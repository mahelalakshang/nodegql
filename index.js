const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

// Use CORS middleware to allow cross-origin requests
app.use(cors());

// Use body-parser middleware to parse JSON bodies
app.use(bodyParser.json());

// Define a GET route for '/'
app.get("/api/gg", (req, res) => {
  res.send("Hello, World1!");
});

// Define a POST route for demonstration
app.post("/api/data", (req, res) => {
  const { name } = req.body;
  res.json({ message: `Hello, ${name}!` });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
