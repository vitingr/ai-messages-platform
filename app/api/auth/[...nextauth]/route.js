import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

import { ConnectToDB } from '@utils/database'
import User from '@models/User'

const handler = NextAuth({
    // Provider é alguma coisa do Google Cloud la kk
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    callbacks: {
        async session({ session }) {
            const sessionUser = await User.findOne({
                email: session.user.email
            })

            session.user.id = sessionUser._id.toString()
            return session
        },

        async signIn({ profile }) {
            try {

                await ConnectToDB()

                // Vai checar se o model usuário já existe
                const userExists = await User.findOne({
                    email: profile.email
                })

                // Se não existir, crie um novo model de User
                if (!userExists) {
                    await User.create({
                        email: profile.email,
                        username: profile.name.replace(" ", "").toLowerCase(),
                        image: profile.picture
                    })
                }

                return true

            } catch (error) {

                console.log(error)
                return false

            }
        }
    }

    // Sempre que utilizamos ne xt, utilizamos um provider, com ele, os callbacks 
    // Session é os cookies, como req.user

})

export { handler as GET, handler as POST }