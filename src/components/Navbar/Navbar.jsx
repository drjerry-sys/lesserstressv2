import { AppBar, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './style';

const Navbar = () => {

    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h1"></Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
