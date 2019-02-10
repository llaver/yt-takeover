import React, { PureComponent } from 'react';
import { withStyles } from "@material-ui/core/styles";
import PropTypes from 'prop-types';

import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const styles = {
    button: {
        color: "white",
        padding: 0,
        border: "1px solid",
        borderRadius: "0 3px 3px 0",
        height: "32px",
        width: "64px"
    }
};

class SearchButton extends PureComponent {
    render() {
        const { classes } = this.props;
        return (
            <IconButton className={classes.button} aria-label="Delete">
                <SearchIcon />
            </IconButton>
        );
    }
}

SearchButton.propTypes = {};

export default withStyles(styles)(SearchButton);