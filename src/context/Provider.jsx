import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import WeatherContext from './weather';
import useHttp from '../api/useHttp';

const WeatherProvider = ({ children }) => {
  const [locationSearch, setLocationSearch] = useState([]);
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [farenheit, setFarenheit] = useState(false);
  const [error, setError] = useState(false);

  const corsUrl = 'https://api.allorigins.win/get?url=';
  const apiUrl = 'https://www.metaweather.com/api/location/';
  const url = `${corsUrl}${apiUrl}`;

  const getLocationData = async (woeid) => {
    const locationData = await useHttp(`${url}${woeid}/`, setIsLoading, setError);
    setLocation(locationData);
  };

  const searchLocation = async (params) => {
    const locationData = await useHttp(`${url}search/?${params}`, setIsLoading, setError);
    setLocationSearch(locationData);
    if (locationData.length) getLocationData(locationData[0].woeid);
    else setError(true);
  };

  const defaultWeather = () => getLocationData(565346);

  const success = async (position) => {
    await searchLocation(`lattlong=${position.coords.latitude},${position.coords.longitude}`);
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) navigator.geolocation.getCurrentPosition(success, defaultWeather);
    else defaultWeather();
  };

  useEffect(getCurrentLocation, []);

  return (
    location && (
      <WeatherContext.Provider
        value={{
          searchLocation,
          locationSearch,
          getLocationData,
          location,
          isLoading,
          getCurrentLocation,
          farenheit,
          setFarenheit,
          setError,
          error,
        }}
      >
        {children}
      </WeatherContext.Provider>
    )
  );
};

WeatherProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default WeatherProvider;
