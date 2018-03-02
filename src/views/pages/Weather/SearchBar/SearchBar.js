import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.onSearchBtnClick = this.onSearchBtnClick.bind(this);
  }

  static propTypes = {
    handleSearch: PropTypes.func
  };

  onSearchBtnClick() {
    let query = this.searchInput.value.trim();
    this.props.handleSearch(query);
  }

  render() {
    return(
      <div className='search-bar'>
        <input type='text' tabIndex='0'placeholder='Enter location' ref={c => this.searchInput = c} />
        <button onClick={this.onSearchBtnClick}>Search</button>
      </div>
    );
  }
}

export default SearchBar;
