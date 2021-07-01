import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';

import WeatherContext from './weather';
import useHttp from '../hooks/useHttp';

// eslint-disable-next-line react/prop-types
const WeatherProvider = ({ children }) => {
  const [locationSearch, setLocationSearch] = useState([]);
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [farenheit, setFarenheit] = useState(false);

  const getLocationData = async (woeid) => {
    const locationData = await useHttp(
      `https://www.metaweather.com/api/location/${woeid}/`,
      setIsLoading,
    );
    setLocation(locationData);
  };

  const searchLocation = async (params) => {
    const resultLocation = await useHttp(
      `https://www.metaweather.com/api/location/search/?${params}`,
      setIsLoading,
    );
    setLocationSearch(resultLocation);

    if (resultLocation.length) getLocationData(resultLocation[0].woeid);
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
        }}
      >
        {children}
      </WeatherContext.Provider>
    )
  );
};

// WeatherProvider.defaultProps = {
//   children: <></>,
// };

// WeatherProvider.propTypes = {
//   children: PropTypes.element.isRequired,
// };

export default WeatherProvider;
