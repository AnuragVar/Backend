require("dotenv").config();

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hi");
});
app.get("/login", (req, res) => {
  res.send("login page");
});

app.listen(process.env.PORT);
