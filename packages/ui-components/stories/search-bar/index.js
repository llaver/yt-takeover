import React, { Component } from "react";
import { storiesOf } from "@storybook/react";
import SearchBar from "../../src/SearchBar";

class SearchBarWrapper extends Component {
  render() {
    return (
      <div style={{display: "flex"}}>
        <SearchBar />
      </div>
    );
  }
}

storiesOf("Search Bar", module).add("Default", () => <SearchBarWrapper />);
