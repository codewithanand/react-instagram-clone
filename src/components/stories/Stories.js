import React from 'react'
import './stories.scss'
import Story from '../story/Story'

const Stories = () => {
    const stories = [
        {name: "Anand Kumar", imgUrl: ""},
        {name: "Anand Kumar", imgUrl: ""},
        {name: "Anand Kumar", imgUrl: ""},
        {name: "Anand Kumar", imgUrl: ""},
        {name: "Anand Kumar", imgUrl: ""},
        {name: "Anand Kumar", imgUrl: ""},
        {name: "Anand Kumar", imgUrl: ""},
        {name: "Anand Kumar", imgUrl: ""},
        {name: "Anand Kumar", imgUrl: ""},
    ]
    return (
        <div className='stories'>
            <div className="storyScroller">
                {stories.map((item, index) => <Story key={index} info={item} />)}
            </div>
        </div>
    )
}

export default Stories