const express = require("express");

const app = express();

// Basic dynamic route with parameters in the URL
app.get("/user/:userId/:name/:password", (req, res) => {
  // Logs the query string (e.g., ?key=value) from the URL
  console.log("query", req.query); // example: /user/1/Sasi/secret?key=value

  // Logs the route parameters (i.e., values from the URL pattern)
  console.log("params", req.params); // example: { userId: '1', name: 'Sasi', password: 'secret' }

  // Responds with a JSON object
  res.send({ firstName: "Sasi", lastName: "Kumar" });
});

// Start the server
app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777...");
});

// Example 1: Wildcard route matching using "*" in the URL
// In this case, we are matching any route that starts with "/ab", followed by any characters and ending with "cd"
// For instance, "/ab1234cd", "/ab-anything-cd", "/abcd", etc., all match this route
app.get("/ab*cd", (req, res) => {
  console.log("Wildcard match triggered!");
  res.send("Wildcard route matched!");
});

// Example 2: Regular expression to capture a specific pattern in the URL
// This will match a route like "/product/123" where 123 is a numeric product ID
// The regular expression [0-9]+ ensures that only numbers are accepted as a valid product ID
app.get("/product/:productId([0-9]+)", (req, res) => {
  console.log("Product ID:", req.params.productId); // Logs the numeric product ID
  res.send(`Product with ID: ${req.params.productId}`);
});

// Example 3: Catch-all route using a wildcard in a path to match any route
// The "*" in the path is a wildcard that matches any path after "/catchall/"
// For example, "/catchall/anything", "/catchall/123", "/catchall/hello-world" would all match
app.get("/catchall/*", (req, res) => {
  console.log("Catch-all route matched:", req.params[0]); // Logs the path after "/catchall/"
  res.send(`Catch-all route matched for: ${req.params[0]}`);
});

// Example 4: Optional route parameters using regular expressions
// In this example, the 'age' parameter is optional; it will match both "/user/1" and "/user/1/25" (where 25 is the age)
app.get("/user/:userId/:age?", (req, res) => {
  const userId = req.params.userId;
  const age = req.params.age || "not provided"; // If age is not provided, default to "not provided"
  console.log(`User ID: ${userId}, Age: ${age}`);
  res.send(`User ID: ${userId}, Age: ${age}`);
});

// Example 5: Dynamic routing with a regex for specific path patterns
// In this example, we're capturing a URL like "/order/abc123" where the "abc123" is an alphanumeric string.
// The regular expression [a-zA-Z0-9]+ matches alphanumeric characters (both upper and lowercase).
app.get("/order/:orderId([a-zA-Z0-9]+)", (req, res) => {
  console.log("Order ID:", req.params.orderId); // Logs the alphanumeric order ID
  res.send(`Order with ID: ${req.params.orderId}`);
});


// Things to Keep in Mind:

// 1. Use of Regular Expressions: Express allows you to define routes that match specific patterns using regular expressions inside the route parameters. This gives you much more flexibility and control over the route matching.

// 2. Wildcards (*): The wildcard * matches everything after the specified path. You can use it to match paths dynamically, but be careful with overusing it as it can sometimes catch unintended routes.

// 3. Optional Parameters (?): You can make certain parts of a route optional by adding ? to the parameter, which is helpful in cases where some data is optional.
