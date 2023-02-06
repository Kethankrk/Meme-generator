import React from 'react';

function Meme(props){


    return(
        <div className="for-meme-img">
            <img src={props.images} className="meme-img" />
            <p className='meme-top-text meme-text'>{props.formData.topText}</p>
            <p className='meme-bottom-text meme-text'>{props.formData.bottomText}</p>
        </div>
    )
}

export default Meme;