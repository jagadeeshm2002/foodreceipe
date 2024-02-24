import React, { useEffect, useState } from 'react';
import Search from '../search';

// const apiKey = "ffbdfa753fedcb1f6a74b4b2724be432"

export default function Weather() {
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [weatherData, setWeatherData] = useState([]);




    async function fetchWeatherData(param) {
        try {
            setLoading(true)
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=${apiKey}`)
            const data = await res.json()

            if (data) {
                setWeatherData(data);
                setLoading(false);
                setError(null);
                setSearch('');
                console.log(data)

            }

        } catch (error) {
            setError(error)
            console.log(error)

            setLoading(false)

        }

    }

    function handleSearch() {
        fetchWeatherData(search);
    }
    function getCurrentDate(){
        return new Date().toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric',
        });
    }

    useEffect(()=>{
        fetchWeatherData('chennai');
    },[])




    return (
        <div className='weather-app'>
            <Search
                search={search} setSearch={setSearch} handleSearch={handleSearch} />

            <div className='weather-details'>
                {error ? <h3 className='load-error'>{error.message} Error occoured  </h3> : null}
                {loading ? <h3 className='load-error'>loading please wait...</h3> :<div className='weather-detail'>
                <h3 className='city-name'>{weatherData?.name},{weatherData?.sys?.country}</h3>
                <p className='date'>{getCurrentDate()}</p>
                <p className='temp'>{weatherData?.main?.temp}</p>
                <p className='weather-type'>{weatherData && weatherData[0] ?weatherData[0].description:null}</p>
                <div className='weather-sub'>
                    <p className='wind-speed'>{weatherData?.wind?.speed} <br /> wind speed</p>
                    <p className='humidity'>{weatherData?.main?.humidity}% <br /> Humidity</p>
                </div></div>}

            </div>

        </div>
    )
}
