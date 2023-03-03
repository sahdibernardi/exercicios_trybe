const express = require('express');

const router = express.Router();
const peopleDB = require('../db/peopleDB');

router.post('/', async (req, res) => {
  const person = req.body;
  try {
    const [result] = await peopleDB.insert(person);
    res.status(201).json({
      message: `Person successfully added with id ${result.insertId}` });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'an Error occured in your subscription' });
  }
});

module.exports = router;