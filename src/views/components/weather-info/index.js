import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Title = styled.h3`
  color: green;
  font-size: 20px;
`;

const WeatherInfo = ({data}) => {
  if(Object.keys(data).length === 0 && data.constructor === Object) {
    return(null);
  } else {
    return (    
      <div>
        <Title>Detailed weather for {data.name}</Title>
        <div>Temperature: {data.main.temp - 273.15}°C</div>
        <div>Min Temperature: {data.main.temp_min - 273.15} °C</div>
        <div>Max Temperature: {data.main.temp_max - 273.15} °C</div>
        <div>Pressure: {data.main.pressure} hpa</div>
        <div>Humidity: {data.main.humidity} %</div>
        <div>Wind: {data.wind.speed} m/s</div>
      </div>
    );
  }
};

WeatherInfo.propTypes = {
  data: PropTypes.object
};

export default WeatherInfo;
