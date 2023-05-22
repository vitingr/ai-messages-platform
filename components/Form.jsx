import React from 'react'
import Link from 'next/link'

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className='w-full max-w-full flex-center flex-col'>
      <h1 className="head_text text_left">
        <span className="blue">
          {type} Post
        </span>
      </h1>

      <p className="desc text-left max-w-md">
        {type} e compartilhe prompts espetaculares com o mundo, deixe sua imaginação fluir livremente com qualquer plataforma AI.
      </p>

      <form onSubmit={handleSubmit} className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'>
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Seu Prompt AI
          </span>
          <textarea value={post.prompt} onChange={(e) => setPost({ ...post, prompt: e.target.value })} placeholder='Escreva seu prompt aqui...' className='form_textarea' required />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Tag {` `}
            <span className='font-normal'>(#product, #webdevelopment, #idea)</span>
          </span>
          <input value={post.tag} onChange={(e) => setPost({ ...post, tag: e.target.value })} placeholder='#tag' className='form_input' required />
        </label>

        <div className='flex-end mx-3 mb-5 gap-4'>
        <Link href="/" className='text-gray-500 text-sm'>
          Cancelar
        </Link>

        <button type="submit" className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white' disabled={submitting}>
          {submitting? `${type}...` : type}
        </button>

        </div>
      </form>

    </section>
  )
}

export default Form