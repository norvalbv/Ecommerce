const express = require("express");
const app = express();
const pool = require("../db/pool");

const getAllData = async (req, res) => {
  try {
    // pool.query(`SELECT * FROM ecommerce`);
    res.send("TEST");
  } catch (error) {
    console.error(error);
  }
};

module.exports = { getAllData };
