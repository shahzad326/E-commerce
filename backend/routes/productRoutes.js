import express from "express";
const router = express.Router();

import {
  getProducts,
  getProductById,
  createProduct,
} from "../controllers/productController.js";

// router.route("/",  getProducts);
router.route("/").get(getProducts);

router.route("/:id").get(getProductById);

router.route("/product").post(createProduct);

export default router;

// router.get(
//     "/",
//     asyncHandler(async (req, res) => {
//       const products = await Product.find({});
//       res.json(products);
//     })
//   );

//   router.get(
//     "/:id",
//     asyncHandler(async (req, res) => {
//       const product = await Product.findById(req.params.id);
//       if (product) {
//         res.json(product);
//       } else {
//         res.status(404);
//         throw new Error("Product Not Found");
//       }
//     })
//   );
