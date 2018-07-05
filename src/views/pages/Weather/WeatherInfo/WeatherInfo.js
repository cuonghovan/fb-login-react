import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Title = styled.h3`
  color: purple;
  font-size: 24px;
`;

const Metric = styled.div`
  color: black;
  font-size: 18px;
`;

const MetricContainer = styled.div`
  display: inline-block;
  text-align: left;
`;

const WeatherInfo = ({ data }) => {
  if (Object.keys(data).length === 0 && data.constructor === Object) {
    return null;
  } else {
    return (
      <div>
        <Title>Detailed weather for {data.name}</Title>
        <MetricContainer>
          <Metric>Temperature: {data.main.temp - 273.15}°C</Metric>
          <Metric>Min Temperature: {data.main.temp_min - 273.15}°C</Metric>
          <Metric>Max Temperature: {data.main.temp_max - 273.15}°C</Metric>
          <Metric>Pressure: {data.main.pressure}hpa</Metric>
          <Metric>Humidity: {data.main.humidity}%</Metric>
          <Metric>Wind: {data.wind.speed}m/s</Metric>
        </MetricContainer>
      </div>
    );
  }
};

WeatherInfo.propTypes = {
  data: PropTypes.object
};

export default WeatherInfo;
