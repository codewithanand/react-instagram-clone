import React from 'react'
import './post.scss'

import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

const Post = () => {
  return (
    <div className='post'>
        <div className="postHeader">
            <div className="postDetails">
                <img src="" alt="" />
                <div className="postUserDetail">
                    <span className="postUserName">artistic_aanand 	• <span className="postTime">34min</span></span>
                    <span className="postLocation">Ranchi, Jharkhand</span>
                </div>
            </div>
            <MoreHorizOutlinedIcon className='moreIcon' />
        </div>
        <div className="postImages">
            <img src="img/15858942.jpeg" alt="" />
        </div>
        <div className="postDots"></div>
        <div className="postActions">
            <FavoriteBorderOutlinedIcon />
            <ModeCommentOutlinedIcon />
            <ShareOutlinedIcon />
        </div>
        <div className="postDesc">
            <span className="postDescUsername">artistic_aanand </span><span className="postDescDetails">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, architecto dignissimos sed adipisci non inventore nemo odio velit ipsa quae itaque dolorem consectetur dolores, saepe nesciunt fugit incidunt provident cumque!</span>
        </div>
    </div>
  )
}

export default Post