const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors())
const connect = require("./configs/db")
const productControler = require("./controller/productControler")
const starController = require("./controller/starController")
const northindiaController = require("./controller/northindiacontroller")
const chineseController = require("./controller/chineseController")
const fastfoodController = require("./controller/fastfoodController")




app.use(express.json())
app.use("/products", productControler)
app.use("/star", starController)
app.use("/northindia", northindiaController)
app.use("/chinese", chineseController)
app.use("/fastfood", fastfoodController)




app.listen(5500, async () => {
    try {
        await connect()
        console.log("listening on port 5500")
    } catch (error) {
        console.error("error", error.message)
    }
})