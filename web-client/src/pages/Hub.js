import React, { Component } from "react";

import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";

import UIComponents from "ui-components";
import ThemeController from "../Theme";

const Hub = UIComponents.Hub;

const styles = theme => {
	return {};
};

class HubController extends Component {
	render() {
		return (
			<ThemeController>
				<Hub push={this.props.push} />
			</ThemeController>
		);
	}
}

const connectState = state => {
	return {};
};

const connectDispatch = dispatch => {
	return {};
};

const Enhanced = withStyles(styles, { withTheme: true })(HubController);
export default connect(
	connectState,
	connectDispatch
)(Enhanced);
