import React, { useState } from 'react'
import PostItem from './PostItem';

export default function PostList({posts, ...props}) {

  return (
    <div>
      {posts.map(e => {return <PostItem post={e} key={e.id} />})}
    </div>
  )
}
