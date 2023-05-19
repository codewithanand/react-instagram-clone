import React from 'react'
import './feed.scss'
import Post from '../post/Post'

const Feed = () => {
  return (
    <div className='feed'>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
    </div>
  )
}

export default Feed