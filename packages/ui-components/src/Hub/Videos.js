import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import VideoCard from "../Common/VideoCard";

const styles = {
	container: {},
	root: {}
};

class Videos extends Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.container}>
				<div className={classes.root}>
					<div />
				</div>
			</div>
		);
	}
}

Videos.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Videos);
