import React, { Component } from "react";
import { storiesOf } from "@storybook/react";
import NavigationBar from "../../src/NavigationBar";

class NavBarWrapper extends Component {
  render() {
    return (
      <div style={{display: "flex"}}>
        <NavigationBar onClick={() => {}}/>
      </div>
    );
  }
}

storiesOf("Navigation Bar").add("Default", () => <NavBarWrapper />);
