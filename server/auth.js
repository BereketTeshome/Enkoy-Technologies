const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
require("dotenv").config(); // Load environment variables

// Load credentials from environment variables
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

passport.use(

	new GoogleStrategy(
		{
			clientID: GOOGLE_CLIENT_ID,
			clientSecret: GOOGLE_CLIENT_SECRET,
			callbackURL: "https://server.enkoytechnologies.com/google/callback",
			passReqToCallback: true,
		},
		function (request, accessToken, refreshToken, profile, done) {
			// Custom logic for handling user profile
			return done(null, profile);
		}
	)

);

// Serialize user into session
passport.serializeUser(function (user, done) {
	done(null, user);
});

// Deserialize user from session
passport.deserializeUser(function (user, done) {
	done(null, user);
});

module.exports = passport;
