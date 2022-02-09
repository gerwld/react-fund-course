import React, { useState } from 'react'
import PostItem from './PostItem';

export default function PostList() {
  const [posts, setPosts] = useState([
    {id: '0k', title:'Title', body:'Some text'},
    {id: '1k', title:'Title', body:'Some text'},
    {id: '2k', title:'Title3', body:'Some text'},
    {id: '3k', title:'Title4', body:'Some textdfbdfb'},
  ])

  return (
    <div>
      {posts.map(e => {return <PostItem post={e} keyY={e.id} />})}
    </div>
  )
}
