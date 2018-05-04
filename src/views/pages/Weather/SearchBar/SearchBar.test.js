/*global shallow mount*/
import React from "react";
import "jest-styled-components";
import SearchBar from "./SearchBar";

describe("search-bar", () => {
  const mockHandleSearch = jest.fn();
  const props = {
    handleSearch: mockHandleSearch
  };

  it("renders correctly", () => {
    const searchBar = shallow(<SearchBar {...props} />);
    expect(searchBar).toMatchSnapshot();
  });

  describe("when user enters location and clicks search button", () => {
    const searchBar = mount(<SearchBar {...props} />);
    let queryStr = "hanoi";
    let input = searchBar.find("SearchBar__Input").find("input");
    let searchButton = searchBar.find("SearchBar__SearchButton");

    input.instance().value = queryStr;
    input.simulate("change");
    searchButton.simulate("click");

    it("dispatchs the `handleSearch()` method it receives from props", () => {
      expect(mockHandleSearch).toBeCalledWith(queryStr);
    });
  });
});
