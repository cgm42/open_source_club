import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
const TEST_URL = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=';

export default function Sardorbek() {
    const [temp, setTemp] = useState(null);

    useEffect(() => {
        axios.get(TEST_URL + process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY).then((res) => {
            setTemp(res.data.main.temp);
        });
    }, []);

    return (
        <div>
            <div>Sardorbek Omonkulov</div>
            <div>London</div>
            <div>Temp: {temp}</div>
        </div>
    );
}
