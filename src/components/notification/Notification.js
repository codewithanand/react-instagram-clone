import React from 'react'
import './notification.scss'

const Notification = () => {
  return (
    <div className='notification'>
        <div className="notificationHeader">
            <h1>Notification</h1>
        </div>
        <div className="notificationMain">
            <div className="postLikeNoti">
                <img src="" alt="" className='likerProfilePic' />
                <div className="notiDesc"><span className="notiUserName">vaemp</span> liked your post <span className="notiTime">11:11pm</span></div>
                <img src="" alt="" className='sourcePostImg' />
            </div>
            <div className="postCommentNoti">
                <img src="" alt="" className='likerProfilePic' />
                <div className="notiDesc"><span className="notiUserName">vaemp</span> commented on your post : Very nice!<span className="notiTime">11:11pm</span></div>
                <img src="" alt="" className='sourcePostImg' />
            </div>
            <div className="commentLikeNoti">
                <img src="" alt="" className='likerProfilePic' />
                <div className="notiDesc"><span className="notiUserName">vaemp</span> liked your comment : Very nice!<span className="notiTime">11:11pm</span></div>
                <img src="" alt="" className='sourcePostImg' />
            </div>
            <div className="followNoti">
                <img src="" alt="" className='likerProfilePic' />
                <div className="notiDesc"><span className="notiUserName">vaemp</span> started following you!<span className="notiTime">11:11pm</span></div>
                <button>Follow back</button>
            </div>
        </div>
    </div>
  )
}

export default Notification