import { ConnectToDB } from "@utils/database"
import Prompt from "@models/Prompt"

export const POST = async (request) => {
    const { userId, prompt, tag } = await request.json() // Aqui é onde vc passa para API e recebe eles

    try {
        await ConnectToDB()

        const newPrompt = new Prompt({ creator: userId, prompt, tag })

        await newPrompt.save()
        return new Response(JSON.stringify(newPrompt), { status: 201 })

    } catch (error) {
        return new Response(`Falhar ao criar o Prompt, ${error}`, { status: 500 })
    }
}
// ESSA É UMA ROTA DE API
