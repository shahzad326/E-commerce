// import dotenv from "dotenv";
// import express from "express";
// import products from "./data/products.js";
// import cors from "cors";
// import colors from "colors";
// import connectDB from "./config/db.js";
// import productRoutes from "./routes/productRoutes.js";
// import { notFound, errorHandler } from "./middleware/errorMiddleWare.js";

// dotenv.config();
// connectDB();
// const app = express();
// app.use(cors());

// app.get("/", (req, res) => {
//   res.send("API is running ...");
// });

// app.use("/api/prducts", productRoutes);
// app.use(notFound);
// app.use(errorHandler);

// const PORT = process.env.PORT || 5000;
// app.listen(5000, () => {
//   PORT,
//     console.log(
//       `Server is running ${process.env.NODE_ENV} mode on port ${PORT}`
//     );
// });

import dotenv from "dotenv";
import express from "express";
import products from "./data/products.js";
import cors from "cors";
import colors from "colors";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleWare.js";

dotenv.config();
connectDB();
const app = express();
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running ...");
});

// app.use("/api/products", (req, res) => {
//   res.send("Hello");
// });

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(5000, () => {
  PORT,
    console.log(
      `Server is running ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
        .bold
    );
});
