const express = require("express");
const cors = require("cors");

const app = express();
const connect = require("./configs/db")
const productControler = require("./controller/productControler")
const { register, login } = require("./controller/userController")



app.use(cors())
app.use(express.json())

app.use("/products", productControler)
app.post("/register", register)
app.post("/login", login)




app.listen(5500, async () => {
    try {
        await connect()
        console.log("listening on port 5500")
    } catch (error) {
        console.error("error", error.message)
    }
})