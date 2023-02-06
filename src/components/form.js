import React from 'react';
import { useState } from 'react';

function Form(props){

    const [urlFormMeme, chaneUrl] = useState("")
    const [formData, updateFormData] = useState({
		topText:"", bottomText:""
	})
    const [memeEditStart, changeMemeEditStart] = useState(0)

    function addToFormData(event){
        const {name, value} = event.target
        updateFormData(prev => (
            {...prev, [name]: value }
        ))
    }

    function renderMeme(){
        if (memeEditStart === 0){
            chaneUrl(props.memeUrl)
            changeMemeEditStart(1)
        }
        else{
            props.newMeme(Math.floor(Math.random()* props.images.length))
            chaneUrl(props.memeUrl)
            updateFormData(prev => (
                {...prev, topText:"", bottomText:""}
            ))
        }
    }

    return(
        <div>
            <div className="form">
                { memeEditStart === 1 && <input 
                    type="text" 
                    className="topText input-field" 
                    placeholder='Top Text'
                    name='topText'
                    onChange={addToFormData}
                    value={formData.topText}
                />}
                { memeEditStart === 1 && <input 
                    type="text" 
                    className="bottomText input-field" 
                    placeholder='Bottom Text'
                    name='bottomText'
                    onChange={addToFormData}
                    value={formData.bottomText}
                />}
                <button className="input-btn" onClick={renderMeme}>Create new meme image</button>
            </div>
            <div className="for-meme-img">
                <img src={urlFormMeme} className="meme-img" />
                <p className='meme-top-text meme-text'>{formData.topText}</p>
                <p className='meme-bottom-text meme-text'>{formData.bottomText}</p>
            </div>

        </div>
    )
}

export default Form;