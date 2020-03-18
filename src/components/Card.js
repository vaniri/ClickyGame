import React from 'react';
import "./style.css";

const ImageCard = props => {
    return (
        <div className="image_container">
            <img alt={props.name} className="image" src={props.url}/>
        </div>
    )
}


export default ImageCard