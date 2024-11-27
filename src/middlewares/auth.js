const authAdmin = (req, res, next) => {
  console.log("admin auth is getting checked!!");

  const token = "xyz";
  const isAdminAuthorized = token === "xyz"; // Dummy logic for authorization check

  if (!isAdminAuthorized) {
    res.status(401).send("Unauthorized request");
  } else {
    next(); // Pass control to the next middleware if authorized
  }
};

const authUser = (req, res, next) => {
  console.log("user auth is getting checked!!");

  const token = "xyz";
  const isUserAuthorized = token === "xyz"; // Dummy logic for authorization check

  if (!isUserAuthorized) {
    res.status(401).send("Unauthorized request");
  } else {
    next(); // Pass control to the next middleware if authorized
  }
};

// Export the authAdmin function using module.exports
module.exports = {
  authAdmin,
  authUser,
};
