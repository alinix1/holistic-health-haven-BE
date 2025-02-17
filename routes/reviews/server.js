const express = require("express");
const router = express.Router();
const database = require("../../db/knex");

/* --------------GET ALL REVIEWS BY CUSTOMERS------------- */

router.get("/", async (request, response) => {
  try {
    const reviews = await database("reviews").select();
    response.status(200).json(reviews);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Server error" });
  }
});

/* --------------POST A NEW REVIEW------------- */

router.post("/", async (request, response) => {
  const review = request.body;

  for (let requiredParameter of [
    "holistic_product_id",
    "user_name",
    "user_review",
  ]) {
    if (!review[requiredParameter]) {
      return response
        .status(422)
        .json({ error: `Missing ${requiredParameter} in request body` });
    }
  }

  try {
    const id = await database("reviews").insert(review, "id");
    response.status(201).json(id);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Server error" });
  }
});
module.exports = router;
