import React, { Component } from "react";
import { storiesOf } from "@storybook/react";
import { linkTo } from "@storybook/addon-links";
import { action } from "@storybook/addon-actions";
import Home from "../../src/Home";
import LeftMenu from "../../src/LeftMenu";
import RightMenu from "../../src/RightMenu";

class HomeWrapper extends Component {
  state = {
    leftMenu: false,
    rightMenu: false
  };

  toggleLeftMenu = () => {
    this.setState({ leftMenu: !this.state.leftMenu });
  };
  toggleRightMenu = () => {
    this.setState({ rightMenu: !this.state.rightMenu });
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <Home
            onLeftMenu={this.toggleLeftMenu}
            onRightMenu={this.toggleRightMenu}
          />
          <div>
            <LeftMenu
              open={this.state.leftMenu}
              onClose={this.toggleLeftMenu}
            />
            <RightMenu
              open={this.state.rightMenu}
              onClose={this.toggleRightMenu}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

storiesOf("Home Page", module).add("Default", () => <HomeWrapper />);
