import React, { useContext } from 'react';
import WeatherContext from '../../context/weather';

import Alert from './Error.styles';

const Error = () => {
  const { error, setError } = useContext(WeatherContext);

  const handleAnimationEnd = () => setError(false);

  return (
    error && (
      <Alert onAnimationEnd={handleAnimationEnd} role="alert">
        An error has ocurred
      </Alert>
    )
  );
};

export default Error;
