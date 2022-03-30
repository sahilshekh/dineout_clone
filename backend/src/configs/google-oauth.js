require("dotenv").config();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const { v4: uuidv4 } = require("uuid");

const User = require("../modules/userModel");

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: "http://localhost:5500/auth/google/callback",
            passReqToCallback: true,
        },
        async function (request, accessToken, refreshToken, profile, done) {
            let user = await User.findOne({ email: profile?.email }).lean().exec();

            if (!user) {
                user = await User.create({
                    email: profile?.email,
                    token: uuidv4(),
                    name: profile?.displayName,
                    username: profile?.given_name,
                    image: profile?.picture
                });
            }
            // console.log(request, accessToken, refreshToken, profile)
            // console.log(user)

            return done(null, user);
        }
    )

);

module.exports = passport;