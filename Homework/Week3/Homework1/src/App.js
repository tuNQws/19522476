import { useState } from "react";
import Drum from "./drumkit";


function App() {
  const [sounds, setSounds] = useState([
    {
			name: "w",
			sound: require("./sounds/tom-1.mp3"),
			key: "W",
    },
    {
			name: "a",
			sound: require("./sounds/tom-2.mp3"),
			key: "A",
		},
    {
			name: "s",
			sound: require("./sounds/tom-3.mp3"),
			key: "S",
		},
		{
			name: "d",
			sound: require("./sounds/tom-4.mp3"),
			key: "D",
		},
		{
			name: "j",
			sound: require("./sounds/snare.mp3"),
			key: "J",
		},
		{
			name: "k",
			sound: require("./sounds/crash.mp3"),
			key: "K",
		},
		{
			name: "l",
			sound: require("./sounds/kick-bass.mp3"),
			key: "L",
		},
    {
			name: "u",
			sound: require("./sounds/lip-roll.mp3"),
			key: "U",
		},
    {
			name: "i",
			sound: require("./sounds/lip-bass.mp3"),
			key: "I",
		},
    {
			name: "o",
			sound: require("./sounds/spit-snare.mp3"),
			key: "O",
		},
	]);

	return (
		<div className="App">
			<h1 id='title'>DrumKit</h1>
			<div className="drums">
				{sounds.map((sound, i) => (
					<Drum key={i} letter={sound.key} sound={sound.sound} className='abc'/>
				))}
			</div>
		</div>
	);
}

export default App;
