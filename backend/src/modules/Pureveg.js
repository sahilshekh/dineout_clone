const mongoose =require("mongoose");
 
const PurevegSchema=new mongoose.Schema({
 pureveg:[{type:String,required:true}]
},{
    versionKey:false,
    timestamps:true,
})
module.exports=mongoose.model("pureveg",PurevegSchema)