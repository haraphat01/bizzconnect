import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const authOptions = ({
    secret: process.env.SECRET,
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
      }),
    ],
  })

const handler = NextAuth(authOptions)
export const GET = handler;
export const POST = handler;
export default handler;
  
