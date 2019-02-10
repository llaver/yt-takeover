import React from "react";
import PropTypes from "prop-types";

import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

const navActions = [{ label: "My Alarms", value: "my-alarms" }];

const getValue = (params, value) => {
  if (typeof value === "function") {
    return value(params);
  }

  return value;
};

const renderActions = ({ params, actions }) => {
  return actions.map(action => {
    const value = getValue(params, action.value);
    const Icon = action.icon;

    return (
      <BottomNavigationAction
        key={`nav-item-${value}`}
        label={action.label}
        icon={!!action.icon && <Icon />}
        value={value}
      />
    );
  });
};

const Navigation = props => {
  return (
    <BottomNavigation
      showLabels
      value={props.value}
      onChange={(e, value) => props.push(value)}
    >
      {renderActions(props)}
    </BottomNavigation>
  );
};

Navigation.propTypes = {
  actions: PropTypes.array.isRequired,
  params: PropTypes.object
};

export default Navigation;
