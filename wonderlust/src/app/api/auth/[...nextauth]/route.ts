import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import connectMongo from "@/util/connect-mongo";
import User from '../../../../../models/User'
import jwt from 'jsonwebtoken'

const handler = NextAuth( {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
 callbacks: {
  async jwt({ token, user,account }) {
  if (user) {
    token.id = user.id;
   token.email = user.email;
   
   if (account.provider === 'google') {
 token.loginMethod = 'google'
   } else {
    token.loginMethod = 'credentials'
}

    token.accessToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
   }
   console.log(2,token)
  return token;
},
  async session({ session,token }){
   session.user.id = token.id;
   session.user.email = token.email;
   session.user.accessToken = token.accessToken
   session.user.loginMethod = token.loginMethod;
   console.log(1,session)
      return session;
  },
  async signIn({ account, profile }) {
   try {
    await connectMongo();
    const userExists = await User.findOne({
     email: profile.email,
    });
    if (!userExists) {
     console.log('jeello',userExists,profile)
     await User.create({
      email: profile.email,
      user: profile.name.replace(' ', '').toLowerCase(),
      image:profile.picture
     })
    }
    return true
   } catch (error) {
    console.log('Error checking if user exists: ', error.message)    
    return false
   }
  }
 }
});


export { handler as GET, handler as POST };
