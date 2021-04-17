import mongoose from "mongoose";

const userSchema = new  mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        ref:"User",
    },
    image:{
        type:String,
        require:true,
    },
    brand:{
        type:String,
        require:true,        
    },
    category:{
        
        type:String,
        require:true,        
    },
    price:{
        
        type:Number,
        require:true,        
    },
    category:{
        
        type:String,
        require:true,        
    },
    category:{
        
        type:String,
        require:true,        
    },
    category:{
        
        type:String,
        require:true,        
    },

    

},{
   timestamps:true 
}) 


const User = mongoose.model("User",userSchema)

export default User