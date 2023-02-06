import React from 'react';
import memeImg from './images/Trollface.png'

function Navbar(){
    return(
        <nav className='navbar'>
            <div className="forLogo">
                <img src={memeImg} alt="" className='nav-img'/>
                <p className='nav-logo-text'>Meme Generator</p>
            </div>
            <p className='nav-detail'>React Course - project</p>
        </nav>
    )
}

export default Navbar;