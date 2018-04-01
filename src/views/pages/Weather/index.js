import React from "react";
import styled from "styled-components";
import SearchBarContainer from "./SearchBar";
import WeatherInfoContainer from "./WeatherInfo";

const MainLayout = styled.div`
  background: pink;
  text-align: center;
  padding: 20px 0;
`;

const Weather = () => (
  <MainLayout>
    <SearchBarContainer />
    <WeatherInfoContainer />
  </MainLayout>
);

export default Weather;
