import { ConnectToDB } from "@utils/database";
import Prompt from "@models/Prompt";

export const GET = async (request) => {
    try {
        await ConnectToDB()

        const prompts = await Prompt.find({}).populate('creator')
        return new Response(JSON.stringify(prompts), {status: 200})

    } catch (error) {
        return new Response("Falha ao fazer o Fetch dos Posts", {status: 500})
    }
}