const express = require("express");
const router = express.Router();
const mockStates = require("./mockData/statesData.js");

/* --------------GET ALL STATES------------- */

router.get("/", async (request, response) => {
  try {
    response.status(200).json(mockStates);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
