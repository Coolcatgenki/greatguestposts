import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const options = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            
          }),
        CredentialsProvider({
            name:"Credentials",
            async authorize(credentials){
                const user = {id: "42", email: "cesar_xvr147@hotmail.com", password: "Dotaporsiempre12"}

                if(credentials?.email === user.email && credentials?.password === user.password){
                    return user
                } else{
                    return null
                }
            },
            login: async ({ redirectPath }) => {
                // ---
                return {
                    success: true,
                    redirectTo: redirectPath,
                };
            },
        })
    ],
    pages: {
        signIn: "/sigin",
        error: "/sigin",
    },
    callbacks: {
        async signIn({ account, profile }) {
            if (account.provider === "google") {
                if(profile.email==="steinsgatedo@gmail.com"){
                    return true // Do different verification for other providers that don't have `email_verified`
                }
          }
          else{
            return true
          }
        }
}
}

export default NextAuth(options)