const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors())
const connect = require("./configs/db")
const productControler = require("./controller/productControler")
const dineoutController=require("./controller/dineoutController")
const PureVegController=require("./controller/PureVegController")
const buffetController=require("./controller/buffetController")
app.use(express.json())
app.use("/products", productControler)
app.use("/dineout",dineoutController)
app.use("/pureveg",PureVegController)
app.use("/buffet",buffetController)
app.listen(5500, async () => {
    try {
        await connect()
        console.log("listening on port 5500")
    } catch (error) {
        console.error("error", error.message)
    }
})