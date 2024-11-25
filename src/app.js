const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from the server!");
});

app.get("/test", (req, res) => {
  res.send("Hello from the test!!!!! 54!!!");
});

app.get("/hello", (req, res) => {
  res.send("Hello from the hello!!!!! 54!!!");
});

app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777...");
});
