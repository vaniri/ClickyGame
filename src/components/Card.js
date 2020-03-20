import React from 'react';
import "./style.css";

const ImageCard = props => {
    return (
        <div className="image_container">
            <img alt={props.name} className={`image ${props.shake ? "shake" : ""}`} src={props.url} onClick={() => props.changeScore(props.index)} />
        </div>
    )
}


export default ImageCard