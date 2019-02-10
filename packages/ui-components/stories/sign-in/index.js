import React, { Component } from "react";
import { storiesOf } from "@storybook/react";
import { linkTo } from "@storybook/addon-links";
import { action } from "@storybook/addon-actions";
import SignIn from "../../src/SignIn";

class UsernameStateWrapper extends Component {
  state = {
    username: "",
    password: "",
    loading: false
  };
  onUsernameChange = username => this.setState({ username });
  onPasswordChange = password => this.setState({ password });
  onLogin = ({ username, password }) => {
    this.setState({ loading: true });
    setTimeout(() => {
      action("TOKEN_RECEIVED")();
      linkTo("RouteList", "Loading")();
    }, 750);
  };
  render() {
    return (
      <SignIn
        onUsernameChange={this.onUsernameChange}
        onPasswordChange={this.onPasswordChange}
        username={this.state.username}
        password={this.state.password}
        loading={this.state.loading}
        signedIn={this.props.signedIn}
        onLogin={this.onLogin}
        isOnline={this.props.isOnline}
      />
    );
  }
}

storiesOf("Authentication", module)
  .add("Sign In", () => (
    <UsernameStateWrapper signedIn={false} isOnline={true} />
  ))
  .add("When Offline", () => (
    <UsernameStateWrapper signedIn={false} isOnline={false} />
  ));
