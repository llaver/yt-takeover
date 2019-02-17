import React, { Component } from "react";
import { storiesOf } from "@storybook/react";
import Swatch from "../../src/Common/Swatch";

class SwatchStory extends Component {
  render() {
    return (
      <React.Fragment>
        <div style={{ width: "100%", height: "100%" }}>
          <Swatch />
        </div>
      </React.Fragment>
    );
  }
}

storiesOf("Swatch", module).add("Default", () => <SwatchStory />);
