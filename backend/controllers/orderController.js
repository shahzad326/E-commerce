import expressAsyncHandler from "express-async-handler";
import Order from "../models/orderModel.js";

// Create New Order
// Post /api/order
// access private

const addOrderItems = expressAsyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMehtod,
    itemPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;
  if (orderItems.length === 0) {
    res.status(404);
    throw new Error("No Order Item");
    return;
  } else {
    const order = new Order({
      orderItems,
      user: req.user.id,
      shippingAddress,
      paymentMehtod,
      itemPrice,
      taxPrice,
      shippingPrice,
      totalPrice,

    });
    const createOrder = await order.save();

    res.status(201).json(createOrder);
  }
});

export { addOrderItems };
