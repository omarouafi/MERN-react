import jwt from "jsonwebtoken"
import dotenv from 'dotenv'

dotenv.config({path:'../.env'})



export const generateJwt = (id) => {
    return jwt.sign({id},process.env.JWT,{
        expiresIn:'30d'
    })
}
