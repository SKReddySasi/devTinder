const express = require("express");

const app = express();

// This middleware will run for every incoming request to the server
app.use("/", (req, res, next) => {
  console.log(`Request method: ${req.method} at ${req.url}`);
  next(); // Pass the request to the next handler
});

// Example route
app.get("/home", (req, res) => {
  res.send("Welcome to the Home page");
});

app.post("/home", (req, res) => {
  res.send("POST request to Home page");
});

app.listen(7777, () => {
  console.log("Server is running on port 7777");
});
