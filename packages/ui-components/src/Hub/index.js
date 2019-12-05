import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import VideoCard from "../Common/VideoCard";
import ChannelDesc from "./ChannelDesc";
import UserAnalytics from "./UserAnalytics";
import Videos from "./Videos";

const dummyData = {
	id: 1,
	linkId: "pl8cagt9gK0",
	thumbnailUrl:
		"https://i.ytimg.com/vi/pl8cagt9gK0",
	avatarUrl: "https://yt3.ggpht.com/a/AGF-l79QhNb0ytB6l8csaO31rsodY_gyG7hjNNUGyg=s288-c-k-c0xffffffff-no-rj-mo",
	title: "Pewdiepie vs. T-Series",
	level: 15,
	creator: "DJ Khaled",
	creatorId: "DjKhaled",
	description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
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
		overflowY: "auto",
		overflowX: "hidden"
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
							<ChannelDesc
								avatarUrl={dummyData.avatarUrl}
								creator={dummyData.creator}
								description={dummyData.description}
								level={dummyData.level}
							/>
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
