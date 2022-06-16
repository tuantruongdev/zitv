const Product = require("../Models/productModel");

exports.getAllProduct = async (req, res, next) => {
  const listProduct = await Product.find();
  res.status(200).json({
    status: "successful",
    data: {
      products: listProduct,
    },
  });
};
exports.createProduct = async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(200).json({
    status: "successfully",
    data: {
      product,
    },
  });
};
exports.getProductById = async (req, res, next) => {
  const product = await Product.find({ id: req.params.id });
  res.status(200).json({
    status: "successfully",
    data: {
      product,
    },
  });
};
