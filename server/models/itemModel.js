import mongoose, { Schema } from "mongoose";

const itemSchema =new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String},
    price:{type:String,required:true}
}) 

const Item = mongoose.model("Item",itemSchema)

module.exports = Item