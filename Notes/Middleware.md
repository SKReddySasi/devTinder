### What are Middleware in Express.js?

In Express.js, **middleware** refers to functions that are executed during the request-response cycle. These functions have access to the request object (`req`), the response object (`res`), and the next function in the application’s request-response cycle. Middleware is used to perform various tasks such as modifying the request or response objects, handling errors, logging, authentication, or serving static files.

### Key Characteristics of Middleware in Express:
1. **Order of Execution**: Middleware functions are executed in the order they are added to the Express app.
2. **Request-Response Cycle**: Middleware can inspect and modify the request or response objects before they reach the route handler or the response is sent back to the client.
3. **Calling `next()`**: Most middleware functions need to call the `next()` function to pass control to the next middleware function in the stack. If `next()` is not called, the request will be stuck and not proceed.

### Types of Middleware:
1. **Application-level Middleware**: This middleware is bound to an instance of the Express app. It runs for every incoming request to the app unless specified otherwise.
   ```javascript
   app.use((req, res, next) => {
     console.log('This is application-level middleware');
     next(); // pass control to the next middleware
   });
   ```

2. **Router-level Middleware**: Middleware that is specific to a particular route or set of routes.
   ```javascript
   const router = express.Router();
   router.use((req, res, next) => {
     console.log('This is router-level middleware');
     next();
   });
   ```

3. **Built-in Middleware**: Express has some built-in middleware functions, such as:
   - `express.json()`: Parses incoming requests with JSON payloads.
   - `express.static()`: Serves static files (like images, CSS, and JavaScript files).
   - `express.urlencoded()`: Parses incoming requests with URL-encoded payloads.

4. **Error-handling Middleware**: This type of middleware specifically handles errors and has four parameters: `err, req, res, next`. It is placed after all other middleware and route handlers.
   ```javascript
   app.use((err, req, res, next) => {
     console.error(err.stack);
     res.status(500).send('Something went wrong!');
   });
   ```

5. **Third-party Middleware**: These are middleware functions from external packages. For example, `body-parser` (for parsing JSON and form data), `morgan` (for logging HTTP requests), or `cors` (for enabling Cross-Origin Resource Sharing).

### Example of Middleware in Express:
```javascript
const express = require('express');
const app = express();

// Logger middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();  // pass control to the next middleware
});

// Example route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Error handling middleware (last one in the stack)
app.use((err, req, res, next) => {
  res.status(500).send('Something went wrong!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

### Summary:
Middleware in Express.js allows you to execute code at different stages of the request-response cycle, manipulate the request and response objects, and add functionalities like logging, authentication, error handling, etc. By organizing middleware properly, you can build a clean and modular Express application.