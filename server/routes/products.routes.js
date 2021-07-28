

import express from "express"
import { createProduct, createProductReview, deleteProduct, getProduct, getProducts, getTopProduct, updateProduct } from "../controllers/products.controller.js";
import {protect,restrictedToAdmin} from '../controllers/user.controller.js'


const productRouter = express.Router();

productRouter.route('/').get(getProducts)
productRouter.route('/top').get(getTopProduct)
productRouter.route('/:id').get(getProduct)
productRouter.route('/:id/reviews').post(protect,createProductReview)

productRouter.use(protect,restrictedToAdmin)
productRouter.route('/').post(createProduct)
productRouter.route('/:id').patch(updateProduct).delete(deleteProduct)


export default productRouter