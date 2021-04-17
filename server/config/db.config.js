import mongoose from "mongoose"
import dotenv from 'dotenv'
dotenv.config({path:"../../.env"})

const connectDb = async () => {

    try {
        
        mongoose.connect()
        console.log("Database is connected");

    } catch (error) {
        console.log(error);
        process.exit(1);
    }


}

export default connectDb