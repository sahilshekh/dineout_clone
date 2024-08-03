const express = require("express");
const cors = require("cors");

const app = express();

const connect = require("./configs/db");
const productController = require("./controllers/productController");

const starController = require("./controllers/starController");
const northIndiaController = require("./controllers/northIndiaController");
const chineseController = require("./controllers/chineseController");
const fastFoodController = require("./controllers/fastFoodController");
const { register, login } = require("./controllers/userController");

app.use(cors());
app.use(express.json());
app.use("/star", starController);
app.use("/northindia", northIndiaController);
app.use("/chinese", chineseController);
app.use("/fastfood", fastFoodController);

const dineoutController = require("./controllers/dineoutController");
const pureVegController = require("./controllers/pureVegController");
const buffetController = require("./controllers/buffetController");

app.use("/products", productController);
app.use("/dineout", dineoutController);
app.use("/pureveg", pureVegController);
app.use("/buffet", buffetController);
app.post("/register", register);
app.post("/login", login);

app.listen(process.env.PORT || 5500, async () => {
    try {
        await connect();
        console.log("Listening on port 5500");
    } catch (error) {
        console.error("Error:", error.message);
    }
});

module.exports = app; // Export the app for serverless functions
