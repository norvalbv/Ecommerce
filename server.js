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

app.get("/getdata/:color", async (req, res) => {
  try {
    const info = await pool.query(
      `SELECT * FROM products ORDER BY color = '${req.params.color}' DESC`
    );
    res.send(info.rows);
  } catch (error) {
    console.error(error);
  }
});

app.get("/getdata/:size", async (req, res) => {
  try {
    const info = await pool.query(
      `SELECT * FROM products ORDER BY color = '${req.params.size}' DESC`
    );
    res.send(info.rows);
  } catch (error) {
    console.error(error);
  }
});

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
