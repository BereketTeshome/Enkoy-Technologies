const passport = require("passport");
const User = require("./models/User");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const jwt = require("jsonwebtoken");
require("dotenv").config();

// Credentials
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "https://server.enkoytechnologies.com/google/callback",
      passReqToCallback: true,
    },
    async (request, accessToken, refreshToken, profile, done) => {
      try {
        console.log("Google profile received:", profile);

        let user = await User.findOne({ email: profile.email });

        if (!user) {
          console.log("Registering new user...");
          user = await User.create({
            email: profile.email,
            username: profile.displayName,
            profileImg: profile.picture,
          });
          console.log("User registered:", user);
        }

        const token = jwt.sign(
          {
            userId: user._id,
            email: user.email,
            username: user.username,
            profileImg: user.profileImg,
          },
          JWT_SECRET,
          { expiresIn: "1d" }
        );

        // Attach token to request for use in index.js
        request.token = token;

        return done(null, user);
      } catch (err) {
        console.error("Error during Google authentication:", err);
        return done(err, null);
      }
    }
  )
);

// Serialize and Deserialize
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

module.exports = passport;
