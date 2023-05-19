import React, { useState } from 'react'
import './chat.scss'

import EditIcon from '@mui/icons-material/Edit';
import MailIcon from '@mui/icons-material/Mail';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';

const Chat = () => {
    const [chatActive, setChatActive] = useState(true)
    return (
        <div className='chat'>
            <div className="chatList">
                <div className="chatListHeader">
                    <div className="username">artistic_aanand</div>
                    <EditIcon className="newChatIcon" />
                </div>
                <div className="chatListTabs">
                    <div className="chatListPrimary active">Primary</div>
                    <div className="chatListRequests">Requests</div>
                </div>
                <div className="chatListFriends">
                    <div className="chatFriendIcon active">
                        <img src="" alt="" />
                        <div className="chatListDesc">
                            <div className="chatListFriendName">Vaemp</div>
                            <div className="chatListLastMessage">Good night</div>
                        </div>
                        <div className="chatListTime">11:15pm</div>
                    </div>
                    <div className="chatFriendIcon">
                        <img src="" alt="" />
                        <div className="chatListDesc">
                            <div className="chatListFriendName">Vaemp</div>
                            <div className="chatListLastMessage">Good night</div>
                        </div>
                        <div className="chatListTime">11:15pm</div>
                    </div>
                    <div className="chatFriendIcon">
                        <img src="" alt="" />
                        <div className="chatListDesc">
                            <div className="chatListFriendName">Vaemp</div>
                            <div className="chatListLastMessage">Good night</div>
                        </div>
                        <div className="chatListTime">11:15pm</div>
                    </div>
                </div>
            </div>
            <div className="chatMessages">
                {
                    chatActive ? 
                    <div className='chatMessagesSection'>
                        <div className="chatMessagesHeader">
                            <div className="chatMessageUserStatus">
                                <h2>Vaemp</h2>
                                <span className="userStatus">Active</span>
                            </div>
                            <div className="chatMessageHeaderIcons">

                            </div>
                        </div>
                        <div className="chatMessagesArea">
                            <span className="myMessage">Hi!</span>
                            <span className="themMessage">Hi! Whatsup</span>
                        </div>
                        <div className="chatMessagesActions">
                            <input type="text" placeholder='Message...' />
                            <SendOutlinedIcon style={{cursor: "pointer"}} />
                            <label htmlFor="file"><PhotoOutlinedIcon /></label>
                            <input type="file" id="file" style={{display:"none"}} />
                        </div>
                    </div>
                    :
                    <div className='chatMessageNew'>
                        <MailIcon className='messageIcon' />
                        <h3>Your messages</h3>
                        <p>Send private photos and messages to a friend or group</p>
                    </div>
                }
            </div>
        </div>
    )
}

export default Chat