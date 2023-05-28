import { ConnectToDB } from "@utils/database"
import Prompt from "@models/Prompt"

// GET (read)
export const GET = async (request, { params }) => {
    try {
        await ConnectToDB()

        const prompt = await Prompt.findById(params.id).populate('creator')

        if (!prompt) {
            return new Reponse("Prompt não encontrado!", { status: 404 })
        }
        return new Response(JSON.stringify(prompt), { status: 200 })

    } catch (error) {
        return new Response("Falha ao fazer o Fetch/GET dos Posts", { status: 500 })
    }
}

// PATCH (update)
export const PATCH = async (request, {params}) => {
    const {prompt, tag} = await request.json()

    try {
        await ConnectToDB()

        const existingPrompt = await Prompt.findById(params.id)

        if (!existingPrompt) {
            return new Reponse("Prompt não encontrado!", {status: 404})
        }

        existingPrompt.prompt = prompt
        existingPrompt.tag = tag

        await existingPrompt.save()
        return new Response(JSON.stringify(existingPrompt), { status: 200 })

    } catch (error) {
        return new Response("Falha ao fazer o Update dos Posts", { status: 500 })
    }
}

// DELETE (delete)
export const DELETE = async (request, {params}) => {

    try {
        
        await ConnectToDB()

        await Prompt.findByIdAndRemove(params.id)
        return new Response("Prompt Deletado com sucesso!", {status: 200})

    } catch (error) {
        return new Response("Falha ao fazer o Delete dos Posts", { status: 500 })
    }

}