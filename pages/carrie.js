import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
const TEST_URL = 'https://api.openweathermap.org/data/2.5/weather?q=Vancouver&units=metric&appid=';
const api_key = process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY;
export default function Sardorbek() {
    const [temp, setTemp] = useState(null);
    const [date, setDate] = useState(null);

    useEffect(() => {
        axios.get(TEST_URL + api_key).then((response) => {
            console.log(response);
            setTemp(response.data.main.temp);
            setDate(response.data.dt);
        });
    }, []);

    return (
      <div>
          <div>Vancouver</div>
            <div>Carrie</div>
            <div>Today</div>
            <div>{new Date(date * 1000).toString()}</div>
            <div>{temp}</div>
        </div>
    );
}
