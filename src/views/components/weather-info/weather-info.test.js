import React from 'react';
import { shallow } from 'enzyme';
import WeatherInfo from './index';

describe('weather-info', () => {

  const props = {
    data: {
      wind: {
        speed: 4.6,
        deg: 140
      },
      name: 'Hanoi',
      sys: {
        type: 1,
        id: 7980,
        message: 0.0054,
        country: 'VN',
        sunrise: 1519687115,
        sunset: 1519729216
      },
      dt: 1519722000,
      base: 'stations',
      visibility: 6000,
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d'
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
  }

  const weatherInfo = shallow(<WeatherInfo {...props} />);

  it('renders correctly', () => {
    expect(weatherInfo).toMatchSnapshot();
  });
});
