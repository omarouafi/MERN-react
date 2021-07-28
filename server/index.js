import express from "express"
import dotenv from "dotenv"
import connectDb from "./config/db.config.js"
import { Product } from "./models/productModel.js"
import asyncHandler from "express-async-handler"
import {NotFound,errorHandler} from './middleware/errMiddleware.js'
import productRouter from "./routes/products.routes.js"
import userRouter from "./routes/user.routes.js"
import orderRouter from "./routes/order.routes.js"
import path from 'path'
import morgan from "morgan"
import uploadRouter from './routes/upload.routes.js'


dotenv.config()

const app = express()


const PORT = process.env.PORT || 5050

app.listen(PORT,()=>{
    console.log(`server running ${process.env.NODE_ENV} on port ${PORT}`);
})

connectDb()
app.use(express.json())


const __dirname = path.resolve()

app.use('/uploads',express.static(path.join(__dirname,'/uploads')))

app.use(morgan('dev'))

app.get('/api/config/paypal',(req,res) => {
    res.send(process.env.CLIENT_ID)
})
app.use('/api/products', productRouter )
app.use('/api/users', userRouter )
app.use('/api/orders', orderRouter )
app.use('/api/upload', uploadRouter )




    app.use(express.static(path.join(__dirname,'build')))

    app.get('*',(req,res)=>res.sendFile(path.join(__dirname,'build','index.html')))









app.use(NotFound)

app.use(errorHandler)




