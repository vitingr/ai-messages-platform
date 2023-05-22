"use client"

// toda vez que for usar coisa do react, tem que usar o use client

import React from 'react'
import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

import Form from '@components/Form'

const CreatePrompt = () => {

  const [submitting, setSubmitting] = useState(false)
  const [post, setPost] = useState({
    prompt: "",
    tag: ""
  })

  const createPrompt = async (e) => {
    
  }

  return (
    <Form type="Crie" post={post} setPost={setPost} submitting={submitting} handleSubmit={createPrompt} />
  )
}

export default CreatePrompt