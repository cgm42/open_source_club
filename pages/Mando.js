import React, { useState, useEffect } from "react";


const weatherAPI = process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY;
const austinUrl = `https://api.openweathermap.org/data/2.5/weather?q=Austin&appid=${weatherAPI}`;

export default function Mando() {
    const [cityName, setCityName] = useState([]);

    useEffect(() => {
        const fetchAustinWeather = async () => {
        const response = await fetch(austinUrl);
        const data = await response.json();            
        console.log('data', data.name);
        setCityName(data.name);
        };
        fetchAustinWeather();
    }, []);

    // console.log('austinWeather', austinWeather);

    return (
        <div className="mando__container--main">
            <h1 className="mando__header--city">{cityName}</h1>
        </div>
    );
};

