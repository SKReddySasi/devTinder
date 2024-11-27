const express = require("express");

const app = express();

app.use(
  "/user",
  [
    (req, res, next) => {
      console.log("1st hello");
      next();
      // res.send("Response!!!");
    },
    (req, res, next) => {
      console.log("2nd hello");
      next();
      // res.send("2nd Response!!!");
    },
  ],
  [
    (req, res, next) => {
      console.log("3rd hello");
      // res.send("3rd Response!!!");
      next();
    },
    (req, res, next) => {
      console.log("4th hello");
      // res.send("4th Response!!!");
      next();
    },
    (req, res, next) => {
      console.log("5th hello");
      res.send("5th Response!!! 54");
      // next();
    },
  ]
);

app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777...");
});
