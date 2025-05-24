const express = require("express");
const db = require("../dbconfig/dbconfig");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const [result] = await db.query("select * from projects");

    if (!result || result.length === 0) {
      return res.status(404).json({ error: "Project Not Found" });
    }
    return res.status(200).json(result)
  } catch (error) {
    return res.status(500).json({ error: "Server error while fetching Project data" });
  }
});


module.exports = router;