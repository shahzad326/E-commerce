// import mongoose from "mongoose";
// import dotenv from 'dotenv';
// import color from "color";
// import users from "./data/users.js";
// import products from "./data/products.js";
// import User from './models/userModel.js'
// import Product from './models/productModel.js'
// import connectDB from './config/db.js'
// import Order from "./models/orderModel.js";

// dotenv.config()

// connectDB()

// const importData =( async ()=> {
//     try {
//         await Order.deleteMany()
//         await Product.deleteMany()
//         await User.deleteMany()
//         const createUsers = await User.insertMany(users)
//         const adminUser = createUsers[0]._id
//         const sampleProducts = products.map((products) => {
//             return {...products, user: adminUser}
//         })
//         await Product.insertMany(sampleProducts)
//         console.log("Data Imported".green.inverse)
//         process.exit()
//     }
//     catch (error) {
//         console.error(`${error}`.red.inverse)
//         process.exit(1)
//     }
// })

// if (process.argv [2] ==='-d'){
//     destroyData()
// }
// else {
//     importData()
// }

import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import products from "./data/products.js";
import User from "./models/userModel.js";
import Order from "./models/orderModel.js";
import Product from "./models/productModel.js";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });
    await Product.insertMany(sampleProducts);
    console.log("Data Imported".green.inverse);
    process.exit(0);
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    console.log("Data destroyed".red.inverse);
    process.exit(0);
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
