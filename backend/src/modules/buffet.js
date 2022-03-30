const mongoose =require("mongoose");
 
const buffetSchema=new mongoose.Schema({
 buffet:[{type:String,required:true}]
},{
    versionKey:false,
    timestamps:true,
})
module.exports=mongoose.model("buffet",buffetSchema)