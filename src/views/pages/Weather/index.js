import React from 'react';
import styled from 'styled-components';
import SearchBarContainer from './SearchBar';
import WeatherInfoContainer from './WeatherInfo';

const MainLayout = styled.div`
  background: pink;
  text-align: center;
`;

const Weather = () => (
  <MainLayout>
    <SearchBarContainer />
    <WeatherInfoContainer />
  </MainLayout>
);

export default Weather;
