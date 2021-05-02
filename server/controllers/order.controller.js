import expressAsyncHandler from "express-async-handler";
import Order from '../models/orderModel.js'


export const getOrders = expressAsyncHandler(async(req,res,next) => {
    const orders = await Order.find()
    res.status(200).json(orders)
}) 


export const getOrder = expressAsyncHandler(async(req,res,next) => {
    const order = await Order.findById(req.params.id).populate('user','name email')
    res.status(200).json(order)
}) 



export const updateToPaid = expressAsyncHandler(async(req,res,next) => {
    const order = await Order.findById(req.params.id)
    if(order){
        order.isPaid = true
        order.paidAt = Date.now()
        order.paymentResult = {
            id:req.body.id,
            status:req.body.status,
            update_time:req.body.update_time,
            email_address:req.body.payer.email_address,
        }

        const updatedOrder = await order.save()
        res.status(200).json(updatedOrder)
    }else{
        res.status(404)
        throw Error("Order not found")
        
    }
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



