

import express from "express"
import { getProduct, getProducts } from "../controllers/products.controller.js";


const productRouter = express.Router();

productRouter.route('/').get(getProducts)
productRouter.route('/:id').get(getProduct)

export default productRouter