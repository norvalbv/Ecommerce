const pool = require("../db/pool");

const filterSize = async (req, res) => {
  try {
    const data = await pool.query(
      `SELECT * FROM products ORDER BY ${req.params.size}`
    );
    res.send(data.rows);
  } catch (error) {
    console.error(error);
  }
};

const filterColor = async (req, res) => {
  try {
    const data = await pool.query(
      `SELECT * FROM products ORDER BY ${req.params.size}`
    );
    res.send(data.rows);
  } catch (error) {
    console.error(error);
  }
};

const sort = async (req, res) => {
  try {
    const data = await pool.query(
      `SELECT * FROM products ORDER BY ${req.params.size}`
    );
    res.send(data.rows);
  } catch (error) {
    console.error(error);
  }
};

module.exports = { filterSize, filterColor, sort };
