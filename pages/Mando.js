import React, { useState, useEffect } from "react";


const weatherAPI = process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY;
const austinUrl = `https://api.openweathermap.org/data/2.5/weather?q=Austin&appid=${weatherAPI}`;
export default function Mando() {
    const [cityName, setCityName] = useState();
    const [temp, setTemp] = useState();
    const [date, setDate] =useState();
    const [updateTime, setUpdateTime] = useState();
    const months = [
                    "January", 
                    "February", 
                    "March", 
                    "April", 
                    "May", 
                    "June", 
                    "July", 
                    "August", 
                    "September", 
                    "October", 
                    "November", 
                    "December"
                ];

    useEffect(() => {
        const fetchAustinWeather = async () => {
        const response = await fetch(austinUrl);
        const data = await response.json(); 
        console.log('data', data); 
        const d = new Date();
        const tiempo = (` ${d.getHours()}:${d.getMinutes()}`);
        const dato = (`${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`);
        setDate(dato);
        setUpdateTime(tiempo);         
        setCityName(data.name);
        setTemp(data.main.temp);
        };
        fetchAustinWeather();
    }, []);

    // console.log('temp', temp);

    return (
        <div className="mando__container--main">
            <div className="mando__container--updated">Last updated:{updateTime}</div>
            <h1 className="mando__header--city">{cityName}</h1>
            <div className="mando__container--date">
                <h1 className="mando__header--today">Today</h1>
                <h3 className="mando__header--date">{date}</h3>
            </div>
            
            <div className="mando__container--temperature"> 
                <span className="mando__span--temperature">{Math.ceil(temp - 273.15)}</span>
                <span className="mando__span--degree">° </span>
                <span className="mando__span--temp-system">c</span>
            </div>

        </div>
    );
};

