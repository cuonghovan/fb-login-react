import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { propsToJS } from "Utils/redux-util";
import { weatherSelectors } from "State/weather";
import WeatherInfo from "./WeatherInfo";

class WeatherInfoContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    data: PropTypes.object
  };

  render() {
    return <WeatherInfo data={this.props.data} />;
  }
}

const mapStateToProps = state => ({
  data: weatherSelectors.getWeatherInfoSelect(state)
});

export default connect(mapStateToProps, null)(propsToJS(WeatherInfoContainer));
