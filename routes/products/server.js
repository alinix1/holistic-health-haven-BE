const express = require("express");
const router = express.Router();
const mockProducts = require("./mockData/productsData.js");

/* --------------GET ALL PRODUCTS------------- */

router.get("/", async (req, res) => {
  try {
    res.status(200).json(mockProducts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

/* --------------GET PRODUCT BY ID------------- */

router.get("/:id", async (req, res) => {
  try {
    const productId = Number.parseInt(req.params.id, 10);
    const product = mockProducts.find((item) => item.id === productId);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ error: "Product not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
