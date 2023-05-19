import React, { useState } from 'react'
import './create.scss'

import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

const Create = () => {
    const [file, setFile] = useState(null)
    return (
        <div className='create'>
            <div className="createPost">
                <div className="imageSection">
                    {
                        file && <img src={URL.createObjectURL(file)} alt="" className='createImage' />
                    }
                    <input
                        type="file"
                        id="file"
                        style={{ display: "none" }}
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                    <label htmlFor="file" className='uploadBtn'>
                            <AddCircleOutlineOutlinedIcon/>
                    </label>
                </div>
                <textarea type="text" placeholder='Write caption...' maxLength={2200} rows={5} className='createCaption'></textarea>
                <input type="text" placeholder='Add location' className='createLocation' />
                <div className="actionBtns">
                    <button className='cancelBtn'>Cancel</button>
                    <button className='shareBtn'>Share</button>
                </div>
            </div>
        </div>
    )
}

export default Create