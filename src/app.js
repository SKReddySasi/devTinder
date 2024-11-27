const express = require("express");

const app = express();

app.get("/getUserData", (req, res) => {
  try {
    // logic of DB call and get user data

    throw new Error("Error!!!");
    res.send("User Data Sent");
  } catch (err) {
    res.status(500).send("Some Error contact support team!!!");
  }
});

app.use("/", (err, req, res, next) => {
  if (err) {
    res.status(500).send("Something went wrong!!!");
  }
});

app.listen(7777, () => {
  console.log("Server is successfully running on port 7777");
});
