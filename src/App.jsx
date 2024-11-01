import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import CurrentWeather from './components/CurrentWeather';
import ForecastWeather from './components/ForecastWeather';
import '../node_modules/bootstrap/dist/js/bootstrap';

function App() {
  const [city, setCity] = useState();
  const [clickedCity, setClickedCity] = useState();
  const [fetchCity, setFetchCity] = useState([]);
  const [current, setCurrent] = useState();
  const [forecast, setForecast] = useState();
  const [location, setLocation] = useState();

  const autoCompleteURL =
    'https://api.weatherapi.com/v1/search.json?key=7f12d428f7bf4d0f90e152534241310&q=';

  const weatherURL = (city) =>
    `https://api.weatherapi.com/v1/forecast.json?key=7f12d428f7bf4d0f90e152534241310&q=${city}&days=4&aqi=no&alerts=no`;
  useEffect(() => {
    if (city && city.length > 3) {
      fetchedData();
    }
  }, [city]);

  const fetchedData = async () => {
    try {
      const response = await axios.get(autoCompleteURL + city);
      const result = response.data;
      const mapedData = result.map((data) => {
        return `${data.name},${data.region},${data.country}`;
      });
      setFetchCity(mapedData);
    } catch (error) {
      console.log('Auto Complete URL Error : ', error);
    }
  };

  const handleCity = (city) => {
    console.log(city);
    setClickedCity(city);
    displayWeatherAPI(city);
    setFetchCity([]);
  };

  const displayWeatherAPI = async (city) => {
    try {
      const response = await axios.get(weatherURL(city));
      const result = response.data;

      console.log(result);

      setCurrent(result.current);
      setForecast(result.forecast);
      setLocation(result.location);
    } catch (error) {
      console.log('Weather API Error : ', error);
    }
  };

  return (
    <>
      <div
        className='container mt-3 p-3 rounded'
        style={{ backgroundColor: '#0c2461' }}
      >
        <h1 className='text-center text-light mb-3'>Weather API</h1>
        <div className='card' style={{ backgroundColor: '#8e44ad' }}>
          <div className='card-body'>
            <input
              type='text'
              placeholder='Enter Your City'
              className='form-control'
              onChange={(e) => {
                setCity(e.target.value);
                if (e.target.value === '') {
                  setCurrent();
                  setForecast();
                  setLocation();
                  setClickedCity();
                }
              }}
              value={clickedCity}
            />

            {fetchCity &&
              fetchCity.map((data, index) => {
                return (
                  <div
                    key={index}
                    className='container p-2 border mt-1 rounded bg-success text-light'
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      handleCity(data);
                    }}
                  >
                    {data}
                  </div>
                );
              })}

            {current && (
              <CurrentWeather current={current} location={location} />
            )}
            {forecast && (
              <ForecastWeather forecast={forecast} location={location} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
