const express = require("express");
const router = express.Router();
const mockReviews = require("./mockData/reviewsData.js");

/* --------------GET ALL REVIEWS BY CUSTOMERS------------- */

router.get("/", async (request, response) => {
  try {
    response.status(200).json(mockReviews);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Server error" });
  }
});

/* --------------POST A NEW REVIEW------------- */

router.post("/", async (request, response) => {
  const newReview = request.body;

  for (let requiredParameter of [
    "id",
    "holistic_product_id",
    "user_name",
    "user_review",
  ]) {
    if (!newReview[requiredParameter]) {
      return response
        .status(422)
        .json({ error: `Missing ${requiredParameter} in request body` });
    }
  }

  try {
    mockReviews.push(newReview);
    response.status(201).json(newReview);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Server error" });
  }
});
module.exports = router;
