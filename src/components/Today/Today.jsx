import React from 'react';
import PropTypes from 'prop-types';

import {
  Content,
  SubTitle,
  Cards,
  Card,
  Text,
  CardTitle,
  Unit,
  Status,
  Progress,
  Bar,
} from './Today.styles';
import navigationImage from '../../assets/navigation.svg';

const Today = ({ weather }) => {
  const {
    wind_speed: windSpeed,
    wind_direction_compass: WindDirection,
    humidity,
    visibility,
    air_pressure: airPressure,
  } = weather;

  return (
    <Content>
      <SubTitle>Today’s Hightlights</SubTitle>
      <Cards>
        <Card>
          <Text>Wind status</Text>
          <CardTitle>
            {parseInt(windSpeed, 10)}
            <Unit>mph</Unit>
          </CardTitle>
          <Status image={navigationImage}>{WindDirection}</Status>
        </Card>
        <Card>
          <Text>Humidity</Text>
          <CardTitle>
            {humidity}
            <Unit>%</Unit>
          </CardTitle>
          <Progress aria-hidden="true">
            <Bar progress={`${humidity}%`} />
          </Progress>
        </Card>
        <Card>
          <Text>Visibility</Text>
          <CardTitle>
            {Number(visibility).toFixed(1).replace('.', ',')}
            <Unit space>miles</Unit>
          </CardTitle>
        </Card>
        <Card>
          <Text>Air Pressure</Text>
          <CardTitle>
            {parseInt(airPressure, 10)}
            <Unit space>mb</Unit>
          </CardTitle>
        </Card>
      </Cards>
    </Content>
  );
};

Today.defaultProps = {
  weather: {},
};

Today.propTypes = {
  weather: PropTypes.shape({
    wind_speed: PropTypes.number.isRequired,
    wind_direction_compass: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    visibility: PropTypes.number.isRequired,
    air_pressure: PropTypes.number.isRequired,
  }),
};

export default Today;
