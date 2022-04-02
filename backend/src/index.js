const express = require("express");

const cors = require("cors")

const app = express();

const connect = require("./configs/db")
const productControler = require("./controller/productControler")

const starController = require("./controller/starController")
const northindiaController = require("./controller/northindiacontroller")
const chineseController = require("./controller/chineseController")
const fastfoodController = require("./controller/fastfoodController")
const { register, login } = require("./controller/userController")

app.use(cors())
app.use("/star", starController)
app.use("/northindia", northindiaController)
app.use("/chinese", chineseController)
app.use("/fastfood", fastfoodController)

const dineoutController = require("./controller/dineoutController")
const PureVegController = require("./controller/PureVegController")
const buffetController = require("./controller/buffetController")
app.use(express.json())
app.use("/products", productControler)
app.use("/dineout", dineoutController)
app.use("/pureveg", PureVegController)
app.use("/buffet", buffetController)
app.post("/register", register)
app.post("/login", login)

app.listen(process.env.PORT || 5500, async () => {
    try {
        await connect()
        console.log("listening on port 5500")
    } catch (error) {
        console.error("error", error.message)
    }
})