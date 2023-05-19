import React from 'react'
import './rightbar.scss'

const Rightbar = () => {
  return (
    <div className='rightbar'>
        <div className="userProfileBtn">
            <img src="" alt="" />
            <div className="userProfileDetails">
                <span className="userProfileUsername">artistic_aanand</span>
                <span className="userProfileName">Anand Kumar</span>
            </div>
        </div>
        <div className="suggestedSection">
            <div className="suggestedHeader">
                <h2>Suggested for you</h2>
                <a className="seeAllSuggestion">See All</a>
            </div>
            <div className="suggProfile">
                <div className="suggProfileBtn">
                    <img src="" alt="" />
                    <div className="suggProfileDetails">
                        <span className="suggProfileUsername">artistic_aanand</span>
                        <span className="suggProfileName">Followed by John Doe</span>
                    </div>
                </div>
                <button className="followBtn">Follow</button>
            </div>
        </div>
        <div className="footer">
            <div className="footerQuickLinks">
                <a href="">About</a> • <a href="">Help</a>	•
                <a href="">Press</a> • <a href="">API</a>	•
                <a href="">Jobs</a>	• <a href="">Privacy</a>	• <a href="">Terms</a> • <a href="">Locations</a> • <a href="">Language</a>	• <a href="">Meta Verified</a>
            </div>
            <div className="footerCopyRight">&copy; 2023 INSTAGRAM FROM META</div>
        </div>
    </div>
  )
}

export default Rightbar