

import express from "express"
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from "../controllers/products.controller.js";
import {protect,restrictedToAdmin} from '../controllers/user.controller.js'


const productRouter = express.Router();

productRouter.route('/').get(getProducts)
productRouter.route('/:id').get(getProduct)

productRouter.use(protect,restrictedToAdmin)
productRouter.route('/').post(createProduct)
productRouter.route('/:id').patch(updateProduct).delete(deleteProduct)


export default productRouter