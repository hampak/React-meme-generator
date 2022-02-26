import React from "react";

import memesData from "../memesData.js";

export default function Meme() {
	
	const [meme, setMeme] = React.useState({
		topText: "",
		bottomText: "",
		randomImg: "https://i.imgflip.com/1g8my4.jpg"
	})
	
	const [allMemeImages, setAllMemeImages] = React.useState(memesData)
	
	function handleChange(event) {
		const {value, name} = event.target
		setMeme(prevMeme => {
			return {
				...prevMeme,
				[name]: value
			}
		})
	}
	
	
	function getMemeImage() {
		const memesArray = allMemeImages.data.memes
		const randomNumber = Math.floor(Math.random() * memesArray.length)
		const url = memesArray[randomNumber].url
		setMeme(prevMeme => ({
			...prevMeme,
			randomImg: url
		}))
	}
	
	return(
		<div className="meme-section-container">
			<div className="meme-sub-section">
				<input 
					className="top-text-input"
					type="text" 
					placeholder="Top text"
					name="topText"
					value={meme.topText}
					onChange={handleChange}
					></input>
				<input 
					className="bottom-text-input" 
					type="text" 
					placeholder="Bottom text"
					name="bottomText"
					value={meme.bottomText}
					onChange={handleChange}
					></input>
			</div>
			<button 
				className="new-meme-btn"
				onClick={getMemeImage}
				
				>Get a new meme image</button>
			<div className="meme-img-container">
				<img src={meme.randomImg} className="meme-img"/>
				<h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
			</div>
		</div>
	)
}

// https://youtu.be/bMknfKXIFA8?t=31865 까지 시청

// https://scrimba.com/learn/learnreact/boxes-challenge-part-5-cobdb4d3e907fa304af4b9958