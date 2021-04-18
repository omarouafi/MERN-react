import mongoose from "mongoose";

const productSchema = new  mongoose.Schema({
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


export const Product = mongoose.model("Product",productSchema)

