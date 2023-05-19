import React from 'react'
import './story.scss'

const Story = (props) => {
    return (
        <div className='story'>
            <div className="storyBlock">
                <img src={props.info.imgUrl} alt="" />
                <div className="storyName">{props.info.name}</div>
            </div>
        </div>
    )
}

export default Story