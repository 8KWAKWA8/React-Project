import React, { useState } from 'react';
import './Create.scss';
import {NavLink} from "react-router-dom";

export function Create () {
    return (
        <div className="create">
            <div className="create-instructions"> Type in the title of your post bellow.</div>
            <input type="text" id="title" className='input-title'/>
            <div className="create-instructions">Type the description of your post bellow</div>
            <textarea id="description" className='input-description'></textarea>
            <div className="create-instructions">Pick image</div>
            <DisplayImage/>
            <NavLink to="/"><button onClick={saveBannerInfo} className="create-button">Make banner</button></NavLink>
        </div>
    )
}
const DisplayImage = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    document.addEventListener("DOMContentLoaded", ()=>{
        if (localStorage.getItem("image")) {
            setSelectedImage(localStorage.getItem("image"))
        }
        if (localStorage.getItem("title")) {
            document.getElementById('title').value = localStorage.getItem('title')
        }
        if (localStorage.getItem("description")) {
            document.getElementById('description').value = localStorage.getItem('description')
        }
    })
    return (
        <div>
            {selectedImage && (
                <div className="image-display">
                    <img id="new-image" alt="not fount" width={"250px"} height={"150px"} src={selectedImage} />
                    <br />
                    <button onClick={()=>setSelectedImage(null)}>Remove</button>
                </div>
            )}
            <br />

            <br />
            <input
                className="image-select"
                type="file"
                name="myImage"
                onChange={(event) => {
                    const reader = new FileReader()

                    reader.addEventListener("load", () => {
                        localStorage.setItem('image', reader.result)
                    })

                    reader.readAsDataURL(event.target.files[0])
                    console.log(event.target.files[0]);
                    setSelectedImage(URL.createObjectURL(event.target.files[0]));
                }}
            />
        </div>
    );
};

const postArray = []

function saveBannerInfo () {
    const titleInput = document.getElementById('title').value
    const descriptionInput = document.getElementById('description').value
    const postStorage = {
        image: localStorage.getItem('image'),
        title: titleInput,
        description: descriptionInput,
}
    postArray.push(postStorage)
    localStorage.setItem('posts', JSON.stringify(postArray))
}

