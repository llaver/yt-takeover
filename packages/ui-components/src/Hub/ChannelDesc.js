import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const styles = {
	container: {},
	root: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	avatar: {},
	description: {},
	level: {}
};

class ChannelDesc extends Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.container}>
				<div className={classes.root}>
					<div className={classes.avatar}>
						<img src={} alt={}/>
						<Typography>
							Edit Avatar
						</Typography>
					</div>
					<div className={classes.description}>
					
					</div>
					<div className={classes.level}>
					</div>
				</div>
			</div>
		);
	}
}

ChannelDesc.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ChannelDesc);
