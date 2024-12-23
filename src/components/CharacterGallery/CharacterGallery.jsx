import React from 'react';
import './CharacterGallery.css';

const CharacterGallery = ({characterName, images}) =>{
    return(
    <div className='gallery'>
        <h2>{characterName} Gallery</h2>
        <div className="gallery__img">
        {images.map((image, index) =>(
            <img key={index} src={image} alt={`${characterName} ${index + 1}`}/>
        ))}
        </div>
    </div>
    );
};

export default CharacterGallery;