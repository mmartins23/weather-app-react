import React, { useState, useEffect } from 'react';
import bg from './assets/sunset.jpg'
import './App.css';

function App() {
  // component state variables
  const [location, setLocation] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // OpenWeatherMap API key
  const api_key = 'd776189bac1375a2c717c4b200f976ce';

  // useEffect hook that fetches weather data from OpenWeatherMap API
  useEffect(() => {
    async function fetchData() {
      if (location) {
        setLoading(true);
        setError(null);

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}`;

        try {
          const response = await fetch(url);
          const data = await response.json();
          setData(data);
          console.log(data);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      } else {
        setData(null);
      }
    }

    fetchData();
  }, [location, api_key]);

  // event handler for updating location state
  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  // render weather app interface
  return (
    <div className='app' style={{ backgroundImage: `url(${bg})` }}>
      <div className='container'>
        <h1 className='title'>Weather App</h1>
        <div className='search-container'>
          <input
            type='text'
            placeholder='Enter a location'
            value={location}
            onChange={handleLocationChange}
          />
        </div>
        {loading && <p>Loading...</p>}
        {error && <p>{error.message}</p>}
        {data && data.main && (
          <div className='data-container'>
            <h2>{data.name}</h2>
            <p>Temperature: {data.main.temp} °F</p>
            <p>Feels like: {data.main.feels_like} °F</p>
            <p>Weather: {data.weather[0].main}</p>
          </div>
        )}
      </div>
    </div>
  );
}

// export the App component as the default export
export default App;
