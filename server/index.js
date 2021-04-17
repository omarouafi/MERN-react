import express from "express"
import dotenv from "dotenv"
import products from "./products.js"

dotenv.config()

const app = express()



const PORT = process.env.PORT || 5050

app.listen(PORT,()=>{
    console.log(`server running ${process.env.NODE_ENV} on port ${PORT}`);
})

app.get('/',(req,res)=>{
    res.send('Api is running')
})


app.get('/api/products',(req,res)=>{
    res.status(200).json(products)
})


app.get('/api/products/:id',(req,res)=>{
    const product = products.find(el=>el._id===req.params.id)
    res.status(200).json(product)
})





