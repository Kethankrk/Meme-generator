import React from 'react';
import Navbar from './components/navbar';
import Form from './components/form';
import Meme from './components/meme';
import { useState } from 'react';
import { useEffect } from 'react';

function App(){
	
	const [memeUrlArray, addimgaes] = useState([])

	useEffect(()=>{
		fetch("https://api.imgflip.com/get_memes")
			.then(res => res.json())
			.then(data => addimgaes(data.data.memes))
	}, [])

	const images = memeUrlArray.map(value => (
		value.url
	))
	


	const [randomNum, changeRandomNum] = useState(Math.floor(Math.random()*images.length))

	return (
		<section>
			<Navbar/>
			<Form memeUrl={images[randomNum]} images={images} newMeme={changeRandomNum}/>
		</section>
	);
	}

export default App;
