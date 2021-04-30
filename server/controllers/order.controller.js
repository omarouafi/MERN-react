import expressAsyncHandler from "express-async-handler";
import Order from '../models/orderModel.js'


export const getOrders = expressAsyncHandler(async(req,res,next) => {
    const orders = await Order.find()
    res.status(200).json(orders)
}) 

export const createOrder = expressAsyncHandler(async(req,res,next) => {

    const {shippingAddress,
        shippingPrice,
        paymentMethod,
        taxPrice,
        orderItems,
        totalPrice
    } = req.body

    if ( orderItems && orderItems.length == 0) {
        res.status(400)
        throw Error("Order Items not found")
    }

    const order = await Order.create({shippingAddress,
        shippingPrice,
        paymentMethod,
        taxPrice,
        orderItems,
        totalPrice,
        user:req.user._id
    })

    
    res.status(200).json(order)
}) 



