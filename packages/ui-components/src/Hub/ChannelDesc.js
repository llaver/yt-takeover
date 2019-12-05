import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
	container: {
		width: "100%",
		height: "calc(100% - 64px)",
		overflowY: "scroll",
		display: "flex",
		justifyContent: "center",
		marginTop: '18px'
	},
	root: {
		width: "calc(100vw - 410px)",
		height: "calc(100% - 24px)",
		backgroundColor: '#0d0f0f',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: "12px",
		overflowY: "auto"
	},
	avatar: {
		padding: '30px'
	},
	editAvatar: {
		color: theme.palette.custom.mainAccent,
		letterSpacing: ".2rem",
		fontWeight: "bold",
		marginTop: '4px'
	},
	img: {
		width: '150px'
	},
	description: {
		padding: '25px',
		display: 'flex',
		alignContent: 'space-between',
		flexDirection: 'column'
	},
	creator: {
		letterSpacing: '.5rem',
		fontWeight: "bold",
		margin: '8px 0',
		color: 'white'
	},
	editName: {
		color: theme.palette.custom.mainAccent,
		letterSpacing: ".2rem",
		fontWeight: "bold",
		margin: '4px 0'
	},
	bio: {
		color: "white",
		letterSpacing: ".2rem",
		fontWeight: "bold",
		margin: '4px 0'
	},
	editBio: {
		color: theme.palette.custom.mainAccent,
		letterSpacing: ".2rem",
		fontWeight: "bold",
		margin: '4px 0'
	},
	level: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		margin: '0 20px'
	},
	levelNum: {
		color: 'white'
	},
	levelText: {
		color: theme.palette.custom.mainAccent
	}
});

class ChannelDesc extends Component {
	render() {
		const { classes, avatarUrl, creator, description, level } = this.props;
		return (
			<div className={classes.container}>
				<div className={classes.root}>
					<div className={classes.avatar}>
						<img className={classes.img} src={avatarUrl} alt=""/>
						<Typography className={classes.editAvatar} variant="title">
							Edit Avatar
						</Typography>
					</div>
					<div className={classes.description}>
						<Typography variant="display2" className={classes.creator}>
							{creator}
						</Typography>
						<Typography variant="title" className={classes.editName}>
							Edit Name
						</Typography>
						<Typography variant="title" className={classes.bio}>
							{description}
						</Typography>
						<Typography variant="title" className={classes.editBio}>
							Edit Bio
						</Typography>
					</div>
					<div className={classes.level}>
						<Typography variant="display1" className={classes.levelNum}>
							{level}
						</Typography>
						<Typography variant="title" className={classes.levelText}>
							LV
						</Typography>
					</div>
				</div>
			</div>
		);
	}
}

ChannelDesc.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles, {withTheme: true})(ChannelDesc);
