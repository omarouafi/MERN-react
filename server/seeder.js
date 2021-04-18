
import {User} from "./models/userModel.js"
import {Product} from "./models/productModel.js"
import {order} from './models/orderModel.js'
import products from "./data/products.js"
import users from "./data/users.js"
import connectDb from "./config/db.config.js"
import dotenv from "dotenv"
dotenv.config()

connectDb();

const importData = async () => {

    try {
        
        await User.deleteMany()
        await Product.deleteMany()
        await order.deleteMany()
    
        const createdUsers = await User.insertMany(users)
        const admin = createdUsers[0]._id
        const prods = products.map(p => ({...p,user:admin}))
        await Product.insertMany(prods)
        console.log("imported");
    } catch (error) {
        console.log(error);
    }

}

const deleteData = async () => {

    try {
        await User.deleteMany()
        await Product.deleteMany()
        await order.deleteMany()
        console.log("deleted");
    } catch (error) {
        console.log(error);   
    }

    


}


if(process.argv[2] === "-d"){
    deleteData();
}else{
    importData()
}