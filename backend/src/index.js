const express = require("express");
const cors = require("cors");

const app = express();
const connect = require("./configs/db")
const productControler = require("./controller/productControler")
const { register, login } = require("./controller/userController")


const passport = require("./configs/google-oauth");


app.use(cors())
app.use(express.json())

app.use("/products", productControler)
app.post("/register", register)
app.post("/login", login)




passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});

app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["email", "profile"] })
);

app.get(
    "/auth/google/callback",
    passport.authenticate("google", {
        failureRedirect: "/auth/google/failure",
    }),
    (req, res) => {
        const { user } = req;
        return res.redirect("http://localhost:3000")

    }
);



app.listen(5500, async () => {
    try {
        await connect()
        console.log("listening on port 5500")
    } catch (error) {
        console.error("error", error.message)
    }
})