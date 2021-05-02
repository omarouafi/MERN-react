

import express from "express"
import { createOrder, getOrder, getOrders, updateToPaid } from "../controllers/order.controller.js";
import { protect } from "../controllers/user.controller.js";



const orderRouter = express.Router();

orderRouter.route('/').post(protect,createOrder).get(protect,getOrders)
orderRouter.route('/:id').get(protect,getOrder)
orderRouter.route('/:id/pay').put(protect,updateToPaid)

export default orderRouter