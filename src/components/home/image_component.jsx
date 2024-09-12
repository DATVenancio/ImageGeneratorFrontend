import React, { useEffect, useState } from 'react';
import "./styles.css/image_component.css"

const ImageComponent = (parameters) => {
    const {imageSrc,initial_text} = parameters;
    return (
        <div className='image-div'>
            {imageSrc ? (<img src={imageSrc}  />) : (
            <div className="gray-background">
                <img src="gray_background.png" alt="gray background" />
                <div className="overlay-text">{initial_text}</div>
            </div>
            )}
        </div>
    );
};

export default ImageComponent;
