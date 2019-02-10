import React from "react";
import SearchField from "./SearchField";
import SearchButton from "./SearchButton";

class SearchBar extends React.PureComponent {
  render() {
    return (
      <div style={{ display: "flex" }}>
        <SearchField />
        {/*<SearchButton />*/}
      </div>
    );
  }
}

export default SearchBar;
