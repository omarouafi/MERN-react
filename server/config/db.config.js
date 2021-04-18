import mongoose from "mongoose"
import dotenv from 'dotenv'
dotenv.config({path:"../../.env"})

const connectDb = async () => {

    try {
        
        const result =  await mongoose.connect(process.env.DB,{
            useCreateIndex:true,
            useUnifiedTopology:true,
            useNewUrlParser:true
        })
        console.log(`Database is connected ${result.connection.host}`);

    } catch (error) {
        console.log(error);
        
    }


}

export default connectDb