import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { weatherSelectors } from './../../../core/weather'
import WeatherInfo from 'Components/weather-info';

class WeatherInfoContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    data: PropTypes.object
  };

  render() {
    return (
      <WeatherInfo data={this.props.data} />
    );
  }
}

const mapStateToProps = state => ({
  data: weatherSelectors.getWeatherInfo(state)
});

export default connect(mapStateToProps, null)(WeatherInfoContainer);
