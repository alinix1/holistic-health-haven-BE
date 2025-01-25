const express = require("express");
const router = express.Router();
const mockReviews = require("./mockData/reviewsData.js");

/* --------------GET ALL REVIEWS BY CUSTOMERS------------- */

router.get("/", async (req, res) => {
  try {
    res.status(200).json(mockReviews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

/* --------------POST A NEW REVIEW------------- */

router.post("/", async (req, res) => {
  const newReview = req.body;

  for (let requiredParameter of [
    "id",
    "holistic_product_id",
    "user_name",
    "user_review",
  ]) {
    if (!newReview[requiredParameter]) {
      return res
        .status(400)
        .json({ error: `Missing ${requiredParameter} in request body` });
    }
  }

  try {
    mockReviews.push(newReview);
    res.status(201).json(newReview);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});
module.exports = router;
