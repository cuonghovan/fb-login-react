/*global shallow mount*/
import React from "react";
import "jest-styled-components";
import WeatherInfo from "./WeatherInfo";

describe("weather-info", () => {
  const props = {
    data: {
      wind: {
        speed: 4.6,
        deg: 140
      },
      name: "Hanoi",
      sys: {
        type: 1,
        id: 7980,
        message: 0.0054,
        country: "VN",
        sunrise: 1519687115,
        sunset: 1519729216
      },
      dt: 1519722000,
      base: "stations",
      visibility: 6000,
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d"
        }
      ],
      coord: {
        lon: 105.85,
        lat: 21.03
      },
      cod: 200,
      main: {
        temp: 295.15,
        pressure: 1011,
        humidity: 78,
        temp_min: 295.15,
        temp_max: 295.15
      },
      id: 1581130,
      clouds: {
        all: 75
      }
    }
  };

  it("renders correctly", () => {
    const weatherInfo = shallow(<WeatherInfo {...props} />);

    expect(weatherInfo).toMatchSnapshot();
  });

  it("shows prop data", () => {
    const weatherInfo = mount(<WeatherInfo {...props} />);
    let metrics = weatherInfo.find("WeatherInfo__Metric");

    expect(metrics.at(0).text()).toEqual("Temperature: 22°C");
    expect(metrics.at(1).text()).toEqual("Min Temperature: 22°C");
    expect(metrics.at(2).text()).toEqual("Max Temperature: 22°C");
    expect(metrics.at(3).text()).toEqual("Pressure: 1011hpa");
    expect(metrics.at(4).text()).toEqual("Humidity: 78%");
    expect(metrics.at(5).text()).toEqual("Wind: 4.6m/s");
  });
});
