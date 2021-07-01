import React, { useContext, Fragment } from 'react';

import WeatherContext from '../context/weather';

const formatTemp = (temp, UnitEl = Fragment) => {
  const { farenheit } = useContext(WeatherContext);

  return (
    <>
      {parseInt(farenheit ? temp * 1.8 + 32 : temp, 10)}
      <UnitEl>{farenheit ? '°F' : '°C'}</UnitEl>
    </>
  );
};

export default formatTemp;
