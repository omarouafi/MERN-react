

import express from "express"
import { createOrder, getOrder, getOrders, setDelivered, updateToPaid } from "../controllers/order.controller.js";
import { protect, restrictedToAdmin } from "../controllers/user.controller.js";



const orderRouter = express.Router();

orderRouter.route('/').post(protect,createOrder).get(protect,getOrders)
orderRouter.route('/:id').get(protect,getOrder)
orderRouter.route('/:id/pay').put(protect,updateToPaid)
orderRouter.use(protect,restrictedToAdmin)
orderRouter.route('/:id/deliver').put(setDelivered)

export default orderRouter