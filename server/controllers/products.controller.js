import expressAsyncHandler from "express-async-handler";
import { Product } from "../models/productModel.js";





export const getProducts = expressAsyncHandler(async(req,res,next) => {
    
    let query = {}

    const page = req.query.page*1 || 1
    const size = 5


    if(req.query.name){
            query = {
                
            name:{
                $regex:req.query.name,
                $options:'i'
            }
        }
    }
    
    const count = await Product.count()

    const products = await Product.find(query).limit(size).skip((page-1)*size)
    res.status(200).json({products,pages:(Math.ceil(count/size)),page})
}) 

export const getProduct = expressAsyncHandler(async(req,res,next) => {
    const product = await Product.findById(req.params.id)
    res.status(200).json(product)
}) 

export const getTopProduct = expressAsyncHandler(async(req,res,next) => {
    const product = await Product.find({}).sort({rating:-1}).limit(3)
    res.status(200).json(product)
}) 

export const deleteProduct = expressAsyncHandler(async(req,res,next) => {
    await Product.findByIdAndDelete(req.params.id)
    res.status(204).json("deleted")
}) 



export const updateProduct = expressAsyncHandler(async(req,res,next) => {
    const product = await Product.findByIdAndUpdate(req.params.id,req.body)
    res.status(200).json({
        product
    })
}) 


export const createProduct = expressAsyncHandler(async(req,res,next) => {
    const product = await Product.create(req.body)
    res.status(200).json({
        product
    })
}) 


export const createProductReview = expressAsyncHandler(async(req,res,next) => {
   
    const product = await Product.findById(req.params.id)

    const alreadyReviewed = product.reviews.find(rev => rev.user.toString() == req.user._id)

    if(alreadyReviewed){
        throw Error("Product already reviewed")
    }


    const review = {
        name:req.user.name,
        rating:req.body.rating,
        comment:req.body.comment,
        user:req.user._id,
    }
   
    product.reviews.push(review)

    product.numReviews = product.reviews.length
    product.rating = product.reviews.reduce((acc,review) => acc + review.rating ,0) / product.numReviews

    await product.save()


    res.status(200).json({
        product
    })
}) 



