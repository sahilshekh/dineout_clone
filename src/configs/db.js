const mongoose=require("mongoose");

module.exports=()=>{
    return mongoose.connect("mongodb+srv://Dineout:Dineout$123@dineout.uy43k.mongodb.net/test")
}