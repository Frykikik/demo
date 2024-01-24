import React from 'react';
import { useState } from "react";
import Car1 from './car1.js';
import styles from '../css/my-style.module.css';


function Car() {
	const [brand, setBrand] = useState("Ford");
	const [model, setModel] = useState("Mustang");
	const [year, setYear] = useState("1964");
	const [color, setColor] = useState("red");

	return (
		<>
			<h1>My sssss {brand}</h1>
			<p>
				It is a {color} {model} from {year}.
			</p>
		</>
	)
}

function Car3() {
	const [car, setCar] = useState({
		brand: "Ford",
		model: "Mustang",
		year: "1964",
		color: "red"
	});

	const updateColor = () => {
		setCar(previousState => {
			return { ...previousState, color: "blue" }
		});
	}

	return (
		<>
			<h1 className={styles.lawnGreen}>My {car.brand}</h1>
			<p className={styles.lawnGreen}>
				It is a {car.color} {car.model} from {car.year}.
			</p> 
			<button
				type="button"
				onClick={updateColor}
			>Blue</button>
		</>
	)
}



export function Car2(props) {
	const carName = "Ford";
	let color = props.color;
	if (color == "red") {
		color = "blue";
	}
	return (
		<>
			<Car1 model="mmma" /><h2 >Hi, I am a {color} {carName} car2!</h2><Car /><Car3 />
		</>
	);
}

export default Car2;
