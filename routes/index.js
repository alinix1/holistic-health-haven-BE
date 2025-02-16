const express = require("express");
const router = express.Router();

// import individual route modules
const reviewsRoutes = require("./reviews/server");
const productsRoutes = require("./products/server");
const statesRoutes = require("./states/server");

// mount specific routes
router.use("/reviews", reviewsRoutes);
router.use("/products", productsRoutes);
router.use("/states", statesRoutes);

module.exports = router;
