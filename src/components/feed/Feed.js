import React from 'react'
import './feed.scss'
import Post from '../post/Post'
import Stories from '../stories/Stories'

const Feed = () => {
  return (
    <div className='feed'>
      <Stories />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
    </div>
  )
}

export default Feed