import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { weatherActions } from "State/weather";
import SearchBar from "./SearchBar";

class SearchBarContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
  }

  static propTypes = {
    fetchWeatherInfoAct: PropTypes.func
  };

  handleSearch(query) {
    this.props.fetchWeatherInfoAct(query);
  }

  render() {
    return <SearchBar handleSearch={this.handleSearch} />;
  }
}

const mapDispatchToProps = {
  fetchWeatherInfoAct: weatherActions.fetchWeatherInfoAct
};

export default connect(null, mapDispatchToProps)(SearchBarContainer);
