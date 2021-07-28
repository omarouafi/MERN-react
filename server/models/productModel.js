import mongoose from "mongoose";


const reviewSchema = new mongoose.Schema({
    name:{type:String,required:true},
    rating:{type:Number,required:true},
    comment:{type:String,required:true},
    user:{type:mongoose.Schema.Types.ObjectId, required:true, ref:'User'}
},{
    timestamps:true
})

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
    reviews:[reviewSchema],
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
    description:{
        
        type:String,
        require:true,        
    },
    countInStock:{
        
        type:Number,
        require:true,        
    },
    rating:{
        
        type:Number,
        require:true,
        default:4.5        
    },
    numReviews:{
        
        type:Number,
        require:true,
             
    },

    

},{
   timestamps:true 
}) 


export const Product = mongoose.model("Product",productSchema)

