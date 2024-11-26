// Import the express library to create the server
const express = require("express");

// Create an Express app instance
const app = express();

// Handling GET requests to "/user" route
app.get("/user", (req, res) => {
  // Sending a JSON response with first name and last name on a GET request
  res.send({ firstName: "Sasi", lastName: "Reddy" });
});

// Handling POST requests to "/user" route
app.post("/user", (req, res) => {
  // Assuming saving data to the database.
  // In a real application, you would interact with a database here
  res.send("Data successfully saved to the database");
});

// Handling DELETE requests to "/user" route
app.delete("/user", (req, res) => {
  // Responding with a success message after deleting user data.
  res.send("Deleted successfully");
});

// Middleware to handle requests starting with "/user"
// "app.use" applies to all HTTP methods (GET, POST, DELETE, etc.) for the "/user" route
app.use("/user", (req, res) => {
  // Sending a JSON response with first name and last name for any request to "/user"
  res.send({ firstName: "Sasi", lastName: "Kumar" });
});

// Starting the server and listening on port 7777
app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777...");
});
