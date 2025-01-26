const express = require("express");
const router = express.Router();
const mockProducts = require("./mockData/productsData.js");

/* --------------GET ALL PRODUCTS------------- */

router.get("/", async (request, response) => {
  try {
    response.status(200).json(mockProducts);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Server error" });
  }
});

/* --------------GET PRODUCT BY ID------------- */

router.get("/:id", async (request, response) => {
  try {
    const productId = Number.parseInt(request.params.id, 10);
    const product = mockProducts.find((item) => item.id === productId);
    if (product.length) {
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
