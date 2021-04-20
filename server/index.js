import express from "express"
import dotenv from "dotenv"
import connectDb from "./config/db.config.js"
import { Product } from "./models/productModel.js"
import asyncHandler from "express-async-handler"
import {NotFound,errorHandler} from './middleware/errMiddleware.js'

dotenv.config()

const app = express()



const PORT = process.env.PORT || 5050

app.listen(PORT,()=>{
    console.log(`server running ${process.env.NODE_ENV} on port ${PORT}`);
})

connectDb()







app.get('/',(req,res)=>{
    res.send('Api is running')
})


app.get('/api/products', asyncHandler(async(req,res)=>{
    const products = await Product.find()
    
    res.status(200).json(products)
}))


app.get('/api/products/:id', asyncHandler( async (req,res)=>{
    
    
    const product = await Product.findById(req.params.id)
    product ? res.status(200).json(product) : res.status(404).json({message:"Product Not Found"})
    
}))

app.use(NotFound)

app.use(errorHandler)




