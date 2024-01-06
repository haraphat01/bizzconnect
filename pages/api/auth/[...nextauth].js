import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import axios from "axios";
const localHost = "http://localhost:3000/api/userApi"
const authOptions = ({
  secret: process.env.SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token
      }

      return token

    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken
      const { email, name } = session.user
    
      try {
        const response = await axios.post(localHost, { email, name });
        console.log(response.data); // Log the response from the user API
      } catch (error) {
        console.error("Error making POST request to user API:", error);
      }
      return session
    }
  }
})

const handler = NextAuth(authOptions)
export const GET = handler;
export const POST = handler;
export default handler;

