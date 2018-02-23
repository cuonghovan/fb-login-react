import React from 'react';
import styled from 'styled-components';
import SearchBarContainer from './../../containers/search-bar';
import WeatherInfoContainer from './../../containers/weather-info';

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
