import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import VideoCard from "../Common/VideoCard";
import ChannelDesc from "./ChannelDesc";
import UserAnalytics from "./UserAnalytics";
import Videos from "./Videos";

const dummyVideoData = {
	id: 1,
	linkId: "pl8cagt9gK0",
	thumbnailUrl:
		"https://i.ytimg.com/vi/pl8cagt9gK0",
	title: "Pewdiepie vs. T-Series",
	creator: "DJ Khaled",
	creatorId: "DjKhaled",
	views: 17109067,
	likes: 69695,
	dislikes: 1075,
	length: "String/Object",
};

const styles = {
	container: {
		width: "100%",
		height: "calc(100% - 64px)",
		overflowY: "scroll",
		display: "flex",
		justifyContent: "center"
	},
	root: {
		width: "calc(100vw - 410px)",
		height: "calc(100% - 24px)",
		padding: "12px",
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-between",
		overflowY: "auto"
	},
	channelInfo: {
	
	},
	channelDesc: {
	
	},
	userAnalytics: {
	
	},
	videos: {
	
	}
};

class Hub extends Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.container}>
				<div className={classes.root}>
					<div className={classes.channelInfo}>
						<div className={classes.channelDesc}>
							<ChannelDesc />
						</div>
						<div className={classes.userAnalytics}>
							<UserAnalytics />
						</div>
					</div>
					<div className={classes.videos}>
						<Videos />
					</div>
				</div>
			</div>
		);
	}
}

Hub.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Hub);
