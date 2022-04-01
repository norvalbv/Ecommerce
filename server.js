const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const index = require("./routes/index");
const filters = require("./routes/filters");
const path = require("path");
const pool = require("./db/pool");

const PORT = process.env.PORT || 5000;

// middlewear

app.use(cors());

// get data
app.get("/getdata", index.getAllData);

app.get("/getdata/:category", index.getCategoryData);

// filters
app.get("/location/:size", filters.filterSize);
app.get("/location/:color", filters.filterColor);
app.get("/location/:sort", filters.sort);

app.get("*", (req, res) => {
  res.send("HI");
});

app.listen(PORT, function () {
  console.log(`Server is listening on port ${PORT}`);
});
