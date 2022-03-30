const express = require("express");
const app = express();
const pool = require("../db/pool");

const getAllData = async (req, res) => {
  try {
    const allData = pool.query(`SELECT * FROM products`);
    res.send(allData);
  } catch (error) {
    console.error(error);
  }
};

module.exports = { getAllData };
