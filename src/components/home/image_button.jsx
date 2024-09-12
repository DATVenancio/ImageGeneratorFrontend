import React from 'react';
import './styles.css/image_button.css';

const ImageButton = ({ text,label, onClick }) => {
  return (
    <button className="image-button" onClick={()=> onClick(label)}>
      {text}
    </button>
  );
};

export default ImageButton;