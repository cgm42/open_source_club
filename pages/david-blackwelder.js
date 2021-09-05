import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
const API_KEY = process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY;
const CITY = "Charlotte";
const UNITS = "imperial";
const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=${UNITS}&appid=${API_KEY}`;

export default function DavidBlackwelder() {
	const [temp, setTemp] = useState(null);
	const [description, setDescription] = useState(null);
	const [icon, setIcon] = useState(null);

	useEffect(() => {
		axios.get(WEATHER_URL).then((res) => {
			console.log(res);
			setTemp(res.data.main.temp.toFixed(0));
			setDescription(res.data.weather[0].description);
		});
	}, []);

	return (
		<div>
			<div>David Blackwelder</div>
			<div>
				It is currently {temp}°F with {description} in {CITY}, NC.
			</div>
		</div>
	);
}
