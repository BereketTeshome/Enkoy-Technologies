const passport = require("passport");
const User = require("./models/User");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const jwt = require("jsonwebtoken");
require("dotenv").config();

// Credentials
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) throw new Error("JWT_SECRET is not defined in the environment variables");

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/google/callback",
      passReqToCallback: true,
    },
    async (request, accessToken, refreshToken, profile, done) => {
      try {
        console.log("Google profile received:", profile);

        const email = profile.emails?.[0]?.value;
        if (!email) return done(new Error("Email not found in Google profile"), null);

        let user = await User.findOne({ email });

        if (!user) {
          console.log("Registering new user...");
          user = await User.create({
            email,
            username: profile.displayName,
            profileImg: profile.picture,
          });
          console.log("User registered:", user);
        }

        // Generate JWT token
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

        console.log("Generated Token:", token);

        // Add token to `req.user` object
        const userObject = user.toObject();
        return done(null, { ...userObject, token });
      } catch (err) {
        console.error("Error during Google authentication:", err);
        return done(err, null);
      }
    }
  )
);

// Serialize and Deserialize
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

module.exports = passport;
