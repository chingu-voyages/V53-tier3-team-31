import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import User from '../models/User';

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // This extracts the token from the Authorization header
  secretOrKey: process.env.JWT_SECRET, // Ensure this matches with the signing secret
};

passport.use(new JwtStrategy(opts, async (jwt_payload, done) => {
    console.log("opts",opts)
  try {
    const user = await User.findOne({ email: jwt_payload.email });
    if (!user) {
      return done(null, false);
    }
    return done(null, user);
  } catch (error) {
    return done(error, false);
  }
}));

export default passport;