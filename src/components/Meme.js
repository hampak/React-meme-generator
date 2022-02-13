import React from "react";

import memesData from "../memesData.js";

export default function Meme() {
	
	const [memeImage, setMemeImage] = React.useState("")
	
	function getMemeImage() {
		const memesArray = memesData.data.memes
		const randomNumber = Math.floor(Math.random() * memesArray.length)
		setMemeImage(memesArray[randomNumber].url)

	}
	
	return(
		<div className="meme-section-container">
			<div className="meme-sub-section">
				<input className="top-text-input" type="text" placeholder="Top text"></input>
				<input className="bottom-text-input" type="text" placeholder="Bottom text"></input>
			</div>
			<button 
				className="new-meme-btn"
				onClick={getMemeImage}
				
				>Get a new meme image</button>
			<img src={memeImage} className="meme-img"/>
		</div>
	)
}

// https://youtu.be/bMknfKXIFA8?t=21947 까지 시청