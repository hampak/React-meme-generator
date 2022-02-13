import React from "react";

import trollFace from "../images/troll-face.png";



export default function Header() {
	return (
		<div className="header-container">
			<div className="header-sub-1-container">
				<img className="troll-image" src={trollFace}></img>
				<h1>Meme Generator</h1>
			</div>
			<h2>React Course - Project 3</h2>
		</div>
	)
}