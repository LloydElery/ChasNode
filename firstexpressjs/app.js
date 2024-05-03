const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

/*
 * Printar 'Hello doggie!'
 * URI = localhost:3000/hund
 */
app.get("/hund", (req, res) => {
  res.send("Hello doggie!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
