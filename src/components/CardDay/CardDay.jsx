import React from 'react';
import PropTypes from 'prop-types';

import {
  Card, Title, Image, Temp, Min,
} from './CardDay.styles';
import getDate from '../../utils/getDate';
import images from '../../utils/images';
import formatTemp from '../../utils/formatTemp';

const CardDay = ({ weather, currentDay }) => {
  const {
    applicable_date: date,
    weather_state_name: state,
    min_temp: min,
    max_temp: max,
  } = weather;

  return (
    <Card>
      <Title>{new Date(date).getDay() === currentDay - 1 ? 'Tomorrow' : getDate(date)}</Title>
      <Image src={images[state.toLowerCase()]} alt={state} />
      <Temp>
        {formatTemp(max)}
        <Min>{formatTemp(min)}</Min>
      </Temp>
    </Card>
  );
};

CardDay.defaultProps = {
  weather: {},
};

CardDay.propTypes = {
  weather: PropTypes.shape({
    applicable_date: PropTypes.string.isRequired,
    weather_state_name: PropTypes.string.isRequired,
    min_temp: PropTypes.number.isRequired,
    max_temp: PropTypes.number.isRequired,
  }),
  currentDay: PropTypes.number.isRequired,
};

export default CardDay;
