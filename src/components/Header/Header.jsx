import React, { useState, useContext } from 'react';

import WeatherContext from '../../context/weather';
import {
  StyledHeader,
  Buttons,
  SearchButton,
  CurrentLocation,
  Content,
  Image,
  Title,
  TemperatureUnit,
  SubTitle,
  List,
  ListItem,
  Location,
  Bottom,
  SearchForm,
  CloseButton,
  SearchContainer,
  InputContainer,
  Input,
  Submit,
  City,
} from './Header.styles';
import Error from '../Error/Error';
import backgroundImage from '../../assets/Cloud-background.png';
import currentLocation from '../../assets/current-location.svg';
import locationImage from '../../assets/location.svg';
import closeImage from '../../assets/close.svg';
import searchImage from '../../assets/search.svg';
import angleImage from '../../assets/angle-right.svg';
import images from '../../utils/images';
import getDate from '../../utils/getDate';
import formatTemp from '../../utils/formatTemp';

const Header = () => {
  const [openForm, setOpenForm] = useState(false);
  const [searchForm, setSearchForm] = useState('');
  const {
    searchLocation, location, getCurrentLocation, getLocationData,
  } = useContext(WeatherContext);

  const handleClick = () => setOpenForm(!openForm);

  const handleSubmit = async (e) => {
    e.preventDefault();
    searchLocation(`query=${searchForm}`);
  };

  const handleChange = (e) => setSearchForm(e.target.value);

  const handleCity = (woeid) => getLocationData(woeid);

  return (
    location && (
      <StyledHeader image={backgroundImage}>
        <Buttons>
          <SearchButton onClick={handleClick} widthEl="165px" heightEl="40px">
            Search for places
          </SearchButton>
          <CurrentLocation
            widthEl="40px"
            heightEl="40px"
            aria-label="Request current location weather"
            image={currentLocation}
            onClick={getCurrentLocation}
          />
        </Buttons>
        <Content>
          <Image
            src={images[location.consolidated_weather[0].weather_state_name.toLowerCase()]}
            alt={location.consolidated_weather[0].weather_state_name}
          />
          <Title>{formatTemp(location.consolidated_weather[0].the_temp, TemperatureUnit)}</Title>
          <SubTitle>{location.consolidated_weather[0].weather_state_name}</SubTitle>
        </Content>
        <Bottom>
          <List>
            <ListItem>Today</ListItem>
            <ListItem circle>{getDate(location.time)}</ListItem>
          </List>
          <Location image={locationImage}>{location.title}</Location>
        </Bottom>
        <SearchForm onSubmit={handleSubmit} open={openForm}>
          <Error />
          <CloseButton
            onClick={handleClick}
            image={closeImage}
            type="button"
            aria-label="Close search form"
          />
          <SearchContainer>
            <InputContainer image={searchImage}>
              <Input
                onChange={handleChange}
                value={searchForm}
                type="search"
                name="search"
                aria-label="Search location"
                placeholder="search location"
              />
            </InputContainer>
            <Submit type="submit">Search</Submit>
          </SearchContainer>
          <City onClick={() => handleCity(44418)} image={angleImage} type="button">
            London
          </City>
          <City onClick={() => handleCity(753692)} image={angleImage} type="button">
            Barcelona
          </City>
          <City onClick={() => handleCity(2441472)} image={angleImage} type="button">
            Long beach
          </City>
        </SearchForm>
      </StyledHeader>
    )
  );
};

export default Header;
