import React, { useContext } from 'react';

import WeatherContext from '../../context/weather';
import { StyledMain, CardsDays } from './Main.styles';
import CardDay from '../CardDay/CardDay';
import Today from '../Today/Today';
import TempButtons from '../TempButtons/TempButtons';
import Spinner from '../Spinner/Spinner';

const Main = () => {
  const { location } = useContext(WeatherContext);

  return (
    <StyledMain>
      <Spinner />
      <TempButtons />
      <CardsDays aria-label="Weather of the next 5 days">
        {location.consolidated_weather.slice(0, 5).map((day) => (
          <CardDay key={day.id} weather={day} currentDay={new Date(location.time).getDay()} />
        ))}
      </CardsDays>
      <Today weather={location.consolidated_weather[0]} />
    </StyledMain>
  );
};

export default Main;
