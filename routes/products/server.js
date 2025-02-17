const express = require("express");
const router = express.Router();
const database = require("../../db/knex");

/* --------------GET ALL PRODUCTS------------- */

router.get("/", async (request, response) => {
  try {
    const products = await database("products").select();
    response.status(200).json(products);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Server error" });
  }
});

/* --------------GET PRODUCT BY ID------------- */

router.get("/:id", async (request, response) => {
  try {
    const productId = Number.parseInt(request.params.id, 10);
    const product = await database("products").where("id", productId).first();

    if (product) {
      response.status(200).json(product);
    } else {
      response.status(404).json({ error: "Product not found" });
    }
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
