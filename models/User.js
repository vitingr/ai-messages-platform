import { Schema, model, models } from 'mongoose'

const UserSchema = new Schema({

    email: {
        type: String,
        required: [true, 'Email é obrigatório'],
        unique: [true, 'Email já existe']
    },
    username: {
        type: String,
        required: [true, 'Username é obrigatório'],
        unique: [true, 'Username já existe'],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username inválido, deve conter de 8-20 caracteres alfanumericos e ser único!"]
    },
    image: {
        type: String
    }

})

const User = models.User || model("User", UserSchema)
export default User