import React from 'react'
import './home.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Stories from '../../components/stories/Stories'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'

const Home = () => {
  return (
    <div className="home">
      {/* <Stories /> */}
      <Feed />
    </div>
  )
}

export default Home