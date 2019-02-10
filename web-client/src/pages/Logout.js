import React, { Component } from "react";
import { connect } from "react-redux";

import { Redirect } from "react-router-dom";
import Core from "core";

//const { actions } = Core.screenMenus;

class Logout extends Component {
  componentDidMount() {
    this.props.onSignOut();
  }

  render() {
    return <Redirect to="/" />;
  }
}

const connectDispatch = dispatch => {
  const onSignOut = () => {
    dispatch({ type: Core.userInfo.actions.TOKEN_REVOKED });
  };

  return {
    onSignOut
  };
};

export default connect(null, connectDispatch)(Logout);
