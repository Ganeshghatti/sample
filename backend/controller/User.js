const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
const port = 3000;
const hostname = "localhost";

app.post("/api/endpoint", (req, res) => {
  const message = req.body.message;
  console.log(message);
  res.send("Data received");
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});

app.get("/", (req, res) => {
  try {
    console.log("ehr");
    res.send("<h1>syrge</h1>");
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Error retrieving users");
  }
});
