const express = require("express");
const productController = require("../controllers/productController");
const productRoute = express.Router();

productRoute
  .route("/")
  .get(productController.getAllProduct)
  .post(productController.createProduct);
productRoute.route("/:id").get(productController.getProductById);
module.exports = productRoute;
