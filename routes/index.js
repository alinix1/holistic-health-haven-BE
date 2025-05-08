const express = require("express");
const router = express.Router();

// import individual route modules
const reviewsRoutes = require("./reviews/server");
const productsRoutes = require("./products/server");
const stripeRoutes = require("./stripe/server");
const imageRoutes = require("./images/server");

// mount specific routes
router.use("/reviews", reviewsRoutes);
router.use("/products", productsRoutes);
router.use("/stripe", stripeRoutes);
router.use("/images", imageRoutes);

module.exports = router;
