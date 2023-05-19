import React from 'react'
import './search.scss'

const Search = () => {
    
    return (
        <div className='search'>
            <div className="searchHeader">
                <h1>Search</h1>
                <input type="text" placeholder='Search' />
            </div>
            <div className="searchMain">
                <h3>Recent</h3>
                <div className="searchResults">
                    <div className="searchProfileBtn">
                        <img src="" alt="" />
                        <div className="searchProfileDetails">
                            <span className="searchProfileUsername">artistic_aanand</span>
                            <span className="searchProfileName">Anand Kumar • 10 Followers</span>
                        </div>
                    </div>
                    <div className="searchProfileBtn">
                        <img src="" alt="" />
                        <div className="searchProfileDetails">
                            <span className="searchProfileUsername">artistic_aanand</span>
                            <span className="searchProfileName">Anand Kumar • 10 Followers</span>
                        </div>
                    </div>
                    <div className="searchProfileBtn">
                        <img src="" alt="" />
                        <div className="searchProfileDetails">
                            <span className="searchProfileUsername">artistic_aanand</span>
                            <span className="searchProfileName">Anand Kumar • 10 Followers</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search