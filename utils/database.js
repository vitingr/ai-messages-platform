import mongoose from 'mongoose'

let isConnectd = false

export const ConnectToDB = async () => {
    mongoose.set('strictQuery', true)

    if (isConnectd) {
        console.log("MongoDB já está conectado")
        return
    }

    try  {

        await mongoose.connect(process.env.MONGODB_URI, {
        dbName: 'share_prompt',
        useNewUrlParser: true,
        useUnifiedTopology: true
        })

        isConnectd = true

        console.log("Conexão com o MongoDB realizado com sucesso!")

    } catch(error) {
        console.log(error)
    }
}