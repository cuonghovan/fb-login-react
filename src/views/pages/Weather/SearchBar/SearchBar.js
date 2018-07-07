import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  padding: 0 10px;
  line-height: 20px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  border-top: 1px solid gray;
  border-left: 1px solid gray;
  border-bottom: 1px solid gray;

  &:hover,
  &:focus {
    outline: none;
  }
`;

const SearchButton = styled.button`
  height: 22px;
  border: 1px solid gray;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;

  &:hover,
  &:focus {
    outline: none;
  }
`;

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.onSearchBtnClick = this.onSearchBtnClick.bind(this);
  }

  static propTypes = {
    handleSearch: PropTypes.func
  };

  onSearchBtnClick() {
    const query = this.searchInput.value.trim();
    this.props.handleSearch(query);
  }

  render() {
    return (
      <Wrapper>
        <Input
          type="text"
          tabIndex="0"
          placeholder="Enter city"
          innerRef={c => (this.searchInput = c)}
        />
        <SearchButton onClick={this.onSearchBtnClick}>Search</SearchButton>
      </Wrapper>
    );
  }
}

export default SearchBar;
