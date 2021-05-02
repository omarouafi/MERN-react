import expressAsyncHandler from "express-async-handler"
import {User} from '../models/userModel.js'
import {generateJwt} from '../utils/generateJwt.js'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config({path:'../.env'})

export const login = expressAsyncHandler(async(req,res,next) => {

    const {email,password} = req.body;

    const user = await User.findOne({email})

    if (user && (await user.checkPass(password))) {
        res.status(200).json({
            status:"success",
            user:{
                name:user.name,
                email:user.email,
                isAdmin:user.isAdmin,
            },
            token:generateJwt(user._id)
        })
    }else{
        res.status(400)
        throw Error("Invalid email or password")
    }
})



export const protect =  expressAsyncHandler(async (req,res,next) => {

    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer') ) {
        token = req.headers.authorization.split(' ')[1]
    }
    if (!token) {
        res.status(401)
        throw Error("Please Login")
    }
    const decode = await jwt.verify(token,process.env.JWT)
    req.user = await User.findById(decode.id) 
    next()

})

export const getMe = expressAsyncHandler(async(req,res,next) => {

    const user = await User.findById(req.user._id)

    if (user) {
        res.status(200).json({
            status:'success',
            user:{
                name:user.name,
                email:user.email,
                isAdmin:user.isAdmin,
            },
            token:generateJwt(user._id)
        })
    }else{
        res.status(400)
        throw Error("Something went wrong")
    }
})

export const updateMe = expressAsyncHandler(async(req,res,next) => {

    const user = await User.findById(req.user._id)

    user.name = req.body.name || user.name
    user.email = req.body.email || user.email
    if(req.body.password){

        user.password = req.body.password || user.password
    }

    const updated = await user.save();
    
        
    if (user) {
        res.status(200).json({
            status:'success',
            user:{
                name:updated.name,
                isAdmin:updated.isAdmin,
                email:updated.email,
            },
            token:generateJwt(user._id)
        })
    }else{
        res.status(400)
        throw Error("Something went wrong")
    }
})


export const getAllUsers = expressAsyncHandler(async (req,res,next) => {

    const users = await User.find();
    res.status(200).json({
        status:'success',
        users
    })

})

export const register = expressAsyncHandler(async(req,res,next) => {

    const {email,name,password} = req.body

    const user = await User.create({email,name,password})
    
    res.status(200).json({
        status:"success",
        user:{
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin,
            
        },
        token:generateJwt(user._id)
    })


})

export const restrictedToAdmin = expressAsyncHandler(async(req,res,next) => {

    if(req.user.isAdmin){
       return next()
    }
    res.status(401)
    throw Error("Not Authorized")
    
})


export const removeUser = expressAsyncHandler(async(req,res,next) => {
     await User.findByIdAndDelete(req.params.id)
    res.status(204).json("deleted")
    
})

export const getUser = expressAsyncHandler(async(req,res,next) => {
     const user = await User.findById(req.params.id)
    res.status(200).json({
        status:'succes',
        user
    })
    
})
export const updateUser = expressAsyncHandler(async(req,res,next) => {
    const user = await User.findById(req.params.id)

    if(user){
        user.name = req.body.name ||user.name
        user.email = req.body.email ||user.email
        user.isAdmin = req.body.isAdmin

    }

    await user.save()

    res.status(200).json({
        status:'succes',
        user
    })
    
})
