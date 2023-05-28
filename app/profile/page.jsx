"use client"

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import Profile from '@components/Profile'

const myProfile = () => {

    const { data: session } = useSession()
    const router = useRouter()

    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`/api/users/${session?.user.id}/posts`);
            const data = await response.json();

            setPosts(data);
        };

        if (session?.user.id) fetchPosts();
    }, [session?.user.id]);

    const handleEdit = (post) => {
        router.push(`/update-prompt?id=${post._id}`)
    }

    const handleDelete = async (post) => {
        const hasConfirmed = confirm("Você tem certeza que deseja deletar esse prompt?")

        if(hasConfirmed) {
            try {
                await fetch(`/api/prompt/${post._id.toString()}`, {
                    method: "DELETE"
                })

                const filteredPosts = posts.filter((p) => p._id !== post._id)
                setPosts(filteredPosts
                    )
            } catch (error) {
                console.log(error)
            }
        }
    }

    return (
        <Profile name="Meu" desc={`Bem-Vindo ao seu Perfil, ${session?.user.name}!`} data={posts} handleEdit={handleEdit} handleDelete={handleDelete} />
    )
}

export default myProfile