import React, { useContext, useState } from 'react'
import './sidebar.scss'

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import MovieOutlinedIcon from '@mui/icons-material/MovieOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

import { Link } from 'react-router-dom';
import Search from '../search/Search';
import { DarkModeContext } from '../../context/DarkModeContext';
import Notification from '../notification/Notification';


const Sidebar = (props) => {
  const [openSearch, setOpenSearch] = useState(false);
  const [openNotification, setOpenNotification] = useState(false)
  const { darkMode, toggle } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      {openSearch && <Search />}
      {openNotification && <Notification />}
      <div className="logo">
        <Link to="/" onClick={() => props.rightBar(true)}>Instagram</Link>
        {
          darkMode 
          ? <LightModeOutlinedIcon onClick={toggle} /> 
          : <DarkModeOutlinedIcon onClick={toggle} />
        }
      </div>
      <div className="quickIcons">
        <Link className="quickIcon" to="/" onClick={() => props.rightBar(true)}>
          <HomeOutlinedIcon /> Home
        </Link>
        <div className="quickIcon" onClick={() => setOpenSearch(!openSearch)}>
          <SearchOutlinedIcon /> Search
        </div>
        <Link className="quickIcon" to="/chat" onClick={() => props.rightBar(false)}>
          <ForumOutlinedIcon /> Messages
        </Link>
        <div className="quickIcon" onClick={() => setOpenNotification(!openNotification)}>
          <FavoriteBorderOutlinedIcon /> Notifications
        </div>
        <Link className="quickIcon" to="/create">
          <AddBoxOutlinedIcon /> Create
        </Link>
        <Link className="quickIcon" to="/profile/1" onClick={() => props.rightBar(false)}>
          <img src="" alt="" /> Profile
        </Link>
      </div>
      <div className="moreAction">
        <MenuOutlinedIcon /> More
      </div>
    </div>
  )
}

export default Sidebar