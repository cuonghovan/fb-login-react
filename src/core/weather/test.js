import React from 'react';
import { shallow } from 'enzyme';
import Weather from '../../views/pages/weather';

describe('<Weather />', () => {
  const weatherWrapper = shallow(<Weather />);

 it('should render correctly', () => {
    expect(weatherWrapper).toMatchSnapshot();
  });
});
