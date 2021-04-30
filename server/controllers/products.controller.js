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



