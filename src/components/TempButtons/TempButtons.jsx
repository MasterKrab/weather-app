import React, { useContext } from 'react';

import WeatherContext from '../../context/weather';

import { Buttons, Button } from './TempButtons.styles';

const TempButtons = () => {
  const { farenheit, setFarenheit } = useContext(WeatherContext);

  const handleClick = () => setFarenheit(!farenheit);

  return (
    <Buttons>
      <Button onClick={handleClick} disabled={!farenheit} aria-label="Change to Celcius" light>
        °C
      </Button>
      <Button onClick={handleClick} disabled={farenheit} aria-label="Change to Fahrenheit">
        °F
      </Button>
    </Buttons>
  );
};
export default TempButtons;
