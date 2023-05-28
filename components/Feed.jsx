"use client"

import { useState, useEffect } from 'react'
import PromptCard from './PromptCard'

const PromptCardList = ({data, handleTagClick}) => {
  return (
    <div className='mt-16 prompt_layout'>
      {data.map((post) => (
        <PromptCard key={post._id} post={post} handleTagClick={handleTagClick} />
      ))}
    </div>
  )
}

const Feed = () => {
  
  const [searchText, setSearchText] = useState("")
  const [posts, setPosts] = useState([])

  const handleSearchChange = (e) => {
    e.preventDefault()

    // Dar Fetch na Data

  }

  // Recomendando usar fetch no useEffet pq só vai dar uma vez na pagina
  const fetchPosts = async () => {
    const response = await fetch("/api/prompt");
    const data = await response.json();

    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input type="text" placeholder='Buscar Prompt' className='search_input perr   ' value={searchText} onChange={handleSearchChange} required />
      </form>

      <PromptCardList data={posts} handleTagClick={() => {}} />
    </section>
  )
}

export default Feed