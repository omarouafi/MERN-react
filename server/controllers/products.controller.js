import expressAsyncHandler from "express-async-handler";
import { Product } from "../models/productModel.js";


export const getProducts = expressAsyncHandler(async(req,res,next) => {
    const products = await Product.find()
    res.status(200).json(products)
}) 

export const getProduct = expressAsyncHandler(async(req,res,next) => {
    const product = await Product.findById(req.params.id)
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



