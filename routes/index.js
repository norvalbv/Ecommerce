const express = require("express");
const app = express();
const pool = require("../db/pool");

const getAllData = async (req, res) => {
  try {
    const allData = await pool.query(`SELECT * FROM products`);
    res.send(allData.rows);
  } catch (error) {
    console.error(error);
  }
};

const getCategoryData = async (req, res) => {
  try {
    const info = await pool.query(
      `SELECT * FROM products WHERE category = '${req.params.category}'`
    );
    res.send(info.rows);
  } catch (error) {
    console.error(error);
  }
};

module.exports = { getAllData, getCategoryData };
