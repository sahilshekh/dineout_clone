const express=require("express");

const app=express();
const connect=require("./configs/db")
const productControler=require("./controller/productControler")
app.use(express.json())
app.use("/products",productControler)
app.listen(5500,async()=>{
    try {
        await connect()
        console.log("listening on port 5500")
    } catch (error) {
        console.error("error",error.message)
    }
})