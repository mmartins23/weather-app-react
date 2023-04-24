# Weather App

A simple weather app built with React that fetches weather data from the OpenWeatherMap API.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Documentation](#documentation)
- [Technologies Used](#technologies-used)
- [License](#license)
- [Contact](#contact)

## Features

- Search for weather data by location
- Display current temperature, feels like temperature, and weather condition

## Installation

1. Clone the repository:

```js
git clone https://github.com/mmartins23/bmi-calculator-react`
```

2. Navigate into the project directory:

```js
cd bmi-calculator-react
```

3. Install the dependencies:

```js
npm install
```

4. Run the project:

```js
npm start
```

5. Open your browser and navigate to **`http://localhost:3000`** to see the BMI calculator app in action.

## Technologies

- React
- CSS
- OpenWeatherMap API

## Usage

* Enter a location in the search box and press enter or click the search button.

* The app will display the current temperature, feels like temperature, and weather condition for that location.

## Documentation
Here's a more detailed explanation of how the useEffect hook and other functions work in the Weather App, along with code examples:

```js
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
```
The **`useEffect`** hook is used to fetch weather data from the OpenWeatherMap API. It is called every time the **`location`** and **`api_key`** variables change.

The hook uses an **`async`** function called **`fetchData()`** to make the API call. If the **`location`** variable is not empty, **`fetchData()`** sets the **`loading`** state variable to **`true`**, resets the **`error`** state variable to **`null`**, and creates a URL for the API call using the **`location`** and **`api_key`** variables.

The **`fetch()`** function is then called with the URL, and the response is converted to JSON using the **`json()`** method. If the API call is successful, the **`data`** state variable is set to the JSON response, and the **`console.log()`** function is called to log the data to the console.

If there is an error with the API call, the **`setError()`** function is called with the error message returned by the API call. Finally, the **`loading`** state variable is set to **`false`**.

If the **`location`** variable is empty, the **`setData()`** function is called with a **`null`** value, which clears the **`data`** state variable.

```js
  // event handler for updating location state
  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };
```
The **`handleLocationChange()`** function is called when the user types in the search input. It sets the **`location`** state variable to the value of the input.

```js
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
            <p>Feels like: {data.main.feels_like}
```

## License

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

This project is licensed under the terms of the MIT license. See [LICENSE](LICENSE) for more information.



## Contact

You can reach me on [Twitter](https://twitter.com/23mmartins)


Feel free to send me a message if you have any questions or feedback about this project. I'll do my best to respond as soon as possible.