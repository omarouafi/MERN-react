import express from 'express'
import { getAllUsers, getMe, login, protect, register, updateMe } from '../controllers/user.controller.js';


const userRouter = express.Router();

userRouter.route('/login').post(login)
userRouter.route('/signup').post(register)
userRouter.route('/me').get(protect,getMe).patch(protect,updateMe)
userRouter.route('/').get(getAllUsers)



export default userRouter