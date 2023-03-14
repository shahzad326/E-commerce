import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

const getProducts = asyncHandler(async (req, res, next) => {
  const products = await Product.find({});
  res.json(products);
});

const getProductById = asyncHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    req.statusCode(404);
    throw new Error("Product Not Found");
  }
});

// export const addProduct = asyncHandler(async (req, res) => {
//   const { name, image, brand, category, ratings, numReviews, price } = req.body;

//   const product = await Product.create({
//     name,
//     image,
//     brand,
//     category,
//     ratings,
//     numReviews,
//     price,
//   });
// });

// import Product from "../models/product.js";

const createProduct = async (req, res) => {
  try {
    const { user, name, image, brand, category, price, countInStock } =
      req.body;

    const product = new Product({
      user,
      name,
      image,
      brand,
      category,
      price,
      countInStock,
    });

    const createdProduct = await product.save();

    res.status(201).json(createdProduct);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export { getProductById, getProducts, createProduct };
