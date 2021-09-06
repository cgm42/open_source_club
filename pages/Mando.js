import React, { useState, useEffect } from "react";


const weatherAPI = process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY;
const austinUrl = `https://api.openweathermap.org/data/2.5/weather?q=Austin&appid=${weatherAPI}`;
export default function Mando() {
    const [cityName, setCityName] = useState();
    const [temp, setTemp] = useState();


    useEffect(() => {
        const fetchAustinWeather = async () => {
        const response = await fetch(austinUrl);
        const data = await response.json();            
        setCityName(data.name);
        setTemp(data.main.temp);
        };
        fetchAustinWeather();
    }, []);

    // console.log('temp', temp);

    return (
        <div className="mando__container--main">
            <div className="mando__container--updated">Last updated:</div>
            <h1 className="mando__header--city">{cityName}</h1>
            <div>
                <h1>Today</h1>
            </div>
            
            <div className="mando__container--temperature"> 
                <span className="mando__span--temperature">{Math.ceil(temp - 273.15)}</span>
                <span className="mando__span--degree">° </span>
                <span className="mando__span--temp-system">c</span>
            </div>

        </div>
    );
};

