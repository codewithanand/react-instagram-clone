import React, { useState } from 'react'
import './profile.scss'
import { Link } from 'react-router-dom'

const Profile = () => {
    const [openPosts, setOpenPosts] = useState(true)
    const [openReels, setOpenReels] = useState(false)
    const [openTags, setOpenTags] = useState(false)
    const [openSaved, setOpenSaved] = useState(false)

    const handlePostsTabs = () => {
        setOpenPosts(true)
        setOpenReels(false)
        setOpenTags(false)
        setOpenSaved(false)
    }
    const handleReelsTabs = () => {
        setOpenPosts(false)
        setOpenReels(true)
        setOpenTags(false)
        setOpenSaved(false)
    }
    const handleTagsTabs = () => {
        setOpenPosts(false)
        setOpenReels(false)
        setOpenTags(true)
        setOpenSaved(false)
    }
    const handleSavedTabs = () => {
        setOpenPosts(false)
        setOpenReels(false)
        setOpenTags(false)
        setOpenSaved(true)
    }

    return (
        <div className='profile'>
            <div className="profileHeader">
                <img src="" alt="" />
                <div className="profileInfo">
                    <div className="username"><Link to="/profile/1">artistic_aanand</Link><button>Edit Profile</button></div>
                    <div className="relationshipCounts">
                        <div className="postsCount">0 posts</div>
                        <div className="followersCount">0 followers</div>
                        <div className="followingCount">0 following</div>
                    </div>
                    <div className="profileBasic">
                        <div className="profileName">Anand Kumar</div>
                        <div className="profileBio">Full stack web developer</div>
                    </div>
                </div>
            </div>
            <div className="profileTabs">
                <div className={openPosts ? "tabItems active" : "tabItems"} onClick={() => handlePostsTabs()}>Posts</div>
                <div className={openReels ? "tabItems active" : "tabItems"} onClick={() => handleReelsTabs()}>Reels</div>
                <div className={openTags ? "tabItems active" : "tabItems"} onClick={() => handleTagsTabs()}>Tags</div>
                <div className={openSaved ? "tabItems active" : "tabItems"} onClick={() => handleSavedTabs()}>Saved</div>
            </div>
            {openPosts && 
                <div className="profilePosts">
                    <img src="" alt="" className="postItems" /> 
                    <img src="" alt="" className="postItems" /> 
                    <img src="" alt="" className="postItems" />                    
                    <img src="" alt="" className="postItems" /> 
                    <img src="" alt="" className="postItems" /> 
                </div>
            }
            {openReels && 
                <div className="profileReels">
                    <img src="" alt="" className="postItems" /> 
                    <img src="" alt="" className="postItems" /> 
                    <img src="" alt="" className="postItems" />                    
                    <img src="" alt="" className="postItems" /> 
                </div>
            }
            {openTags && 
                <div className="profileTags">
                    <img src="" alt="" className="postItems" /> 
                    <img src="" alt="" className="postItems" /> 
                    <img src="" alt="" className="postItems" />                    
                </div>
            }
            {openSaved && 
                <div className="profileSaved">
                    <img src="" alt="" className="postItems" /> 
                    <img src="" alt="" className="postItems" /> 
                </div>
            }
        </div>
    )
}

export default Profile