import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

const CenterWrapper = props => (
  <div
    style={{
      width: "100%",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}
  >
    {props.children}
  </div>
);

const Home = props => {
  const {
    onPasswordChange,
    onUsernameChange,
    username,
    password,
    onLogin,
    loading,
    error,
    isOnline
  } = props;

  if (!isOnline) {
    return (
      <CenterWrapper>
        <Typography>
          It appears you are offline, so we cannot sign you in
        </Typography>
      </CenterWrapper>
    );
  }

  return (
    <CenterWrapper>
        /*TODO Add Google Login Here*/
    </CenterWrapper>
  );
};

Home.propTypes = {
  signedIn: PropTypes.bool.isRequired
};

export default Home;
