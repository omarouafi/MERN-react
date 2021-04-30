

import express from "express"
import { createOrder, getOrders } from "../controllers/order.controller.js";
import { protect } from "../controllers/user.controller.js";



const orderRouter = express.Router();

orderRouter.route('/').post(protect,createOrder).get(protect,getOrders)

export default orderRouter