const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const index = require("./routes/index");

const PORT = process.env.PORT || 5000;

// middlewear

app.use(cors());

app.get("/getdata", index.getAllData);

app.get("*", (req, res) => {
  res.send("LINK NOT SET");
});

app.listen(PORT, function () {
  console.log(`Server is listening on port ${PORT}`);
});
