const express = require("express");

const app = express();

// This middleware will run for **all HTTP methods** on the '/example' route
app.all("/example", (req, res, next) => {
  next(); // Pass control to the next matching handler
  // res.send("This route handles all HTTP methods");
});

// Example routes with different methods
app.get("/example", (req, res) => {
  console.log("GET called");
  res.send("GET request to /example");
});

app.post("/example", (req, res) => {
  console.log("POST called");
  res.send("POST request to /example");
});

app.listen(7777, () => {
  console.log("Server is running on port 7777");
});
