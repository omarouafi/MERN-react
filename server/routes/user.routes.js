import express from 'express'
import { getAllUsers, getMe, getUser, login, protect, register, removeUser, restrictedToAdmin, updateMe, updateUser } from '../controllers/user.controller.js';


const userRouter = express.Router();

userRouter.route('/login').post(login)
userRouter.route('/signup').post(register)
userRouter.route('/me').get(protect,getMe).patch(protect,updateMe)
userRouter.route('/').get(protect,restrictedToAdmin,getAllUsers)
userRouter.route('/:id').delete(protect,restrictedToAdmin,removeUser).get(protect,restrictedToAdmin,getUser).patch(protect,restrictedToAdmin,updateUser)



export default userRouter