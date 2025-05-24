const express = require('express');
const db = require("../dbconfig/dbconfig");
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const [results] = await db.query(
      "SELECT name, title, intro, social_media FROM profile"
    );

    if (!results || results.length === 0) {
      return res.status(404).json({ error: 'No profile data found' });
    }

    return res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error: 'Server error while fetching profile data' });
  }
});

module.exports = router;
