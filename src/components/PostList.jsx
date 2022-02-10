import React, { useState } from 'react'
import PostItem from './PostItem';

export default function PostList({posts, remove, ...props}) {

  return (
    <div>
      {posts.map(e => {return <PostItem remove={remove} post={e} key={e.id} />})}
    </div>
  )
}
