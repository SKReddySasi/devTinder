const express = require("express");

const app = express();

// Import the middleware function using require
const { authAdmin, authUser } = require("./middlewares/auth");

app.use("/admin", authAdmin); // Use authAdmin middleware on /admin routes

app.post("/user/login", (req, res, next) => {
  res.send("User loggedin successfully!!!");
});

// User data route
app.post("/user/data", authUser, (req, res, next) => {
  res.send("User data sent!!!");
});

// Admin routes
app.get("/admin/getAllData", (req, res) => {
  res.send("All Data Sent");
});

app.get("/admin/deleteUser", (req, res) => {
  res.send("Deleted a user");
});

app.listen(7777, () => {
  console.log("Server is successfully running on port 7777");
});
