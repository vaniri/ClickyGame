import React from 'react';
import "./style.css";

const ImageCard = ({ name, shake, url, changeScore, index }) => {
    return (
        <div className="image_container">
            <img alt={name} className={`image ${shake ? "shake" : ""}`} src={url} onClick={() => changeScore(index)} />
        </div>
    )
}


export default ImageCard