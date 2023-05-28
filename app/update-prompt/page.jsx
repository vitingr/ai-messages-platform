"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Form from "@components/Form";

const EditPrompt = () => {
    const router = useRouter();
    const searchParams = useSearchParams()
    const promptId = searchParams.get('id') // Vai buscar o parametro ID na rota

    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState({ prompt: "", tag: "" });

    // Pegar Valores pelo Parametro
    useEffect(() => {
        const getPromptDetails = async () => {
            const response = await fetch(`/api/prompt/${promptId}`)
            const data = await response.json()

            setPost({
                prompt: data.prompt,
                tag: data.tag
            })
        }

        if (promptId) {
            getPromptDetails()
        }
    }, [promptId])

    // Editar Prompt
    const updatePrompt = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        if (!promptId) {
            return alert("Prompt ID não encontrado!")
        }

        try {
            const response = await fetch(`/api/prompt/${promptId}`, {
                method: "PATCH",
                body: JSON.stringify({
                    prompt: post.prompt,
                    tag: post.tag,
                }),
            }); // Aqui vai realizar o POST

            if (response.ok) {
                router.push("/");
            }
        } catch (error) {
            console.log(error);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <Form
            type='Editar'
            post={post}
            setPost={setPost}
            submitting={submitting}
            handleSubmit={updatePrompt}
        />
    );
};

export default EditPrompt;
