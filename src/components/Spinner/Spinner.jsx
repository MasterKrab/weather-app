import React, { useContext } from 'react';

import WeatherContext from '../../context/weather';
import spinner from '../../assets/spinner.svg';
import Image from './Spinner.styles';

const Spinner = () => {
  const { isLoading } = useContext(WeatherContext);

  return isLoading && <Image src={spinner} alt="Loading" role="alert" />;
};

export default Spinner;
