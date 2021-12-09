import { AppBar, Toolbar, Link, Button, Badge, Avatar, IconButton, useMediaQuery } from '@material-ui/core';
import { Notifications, Bookmark } from '@material-ui/icons';
import React from 'react';
import useStyles from './style';
import logo from '../../assets/images/void.png';

const Navbar = () => {

    const classes = useStyles();
    const isAuthPage = false;
    const isAuthenticated = true;
    const isMobile = useMediaQuery('(max-width: 900px)');

    return (
        <AppBar position="fixed" className={classes.appbar}>
            <Toolbar className={classes.toolbar}>
                <div className={classes.logoWrapper}>
                    <img src={logo} className={classes.logo} alt="logo_void" />
                    {!isAuthPage && !isMobile && (
                        <>
                            <Button variant="contained" className={classes.navigation} href="#contained-buttons">Home</Button>
                            <Button variant="outlined" className={classes.navigation} href="#contained-buttons">Blog</Button>
                            <Button variant="outlined" className={classes.navigation} href="#contained-buttons">Contact</Button>
                            <Button variant="outlined" className={classes.navigation} href="#contained-buttons">Support</Button>    
                        </>
                    )}
                </div>
                <div className={classes.menus}>
                {!isAuthPage && !isAuthenticated && (
                    <>
                        <Button variant="contained" className={classes.signup} href="#contained-buttons">Sign Up</Button>
                        <Button variant="outlined" className={classes.signin} href="#contained-buttons">Sign In</Button>    
                    </>
                )}
                {!isAuthPage && isAuthenticated && (
                    <>
                        <Badge variant="dot" color="secondary" className={classes.badge}>
                            <Notifications className={classes.icon} />
                        </Badge>
                        <Badge badgeContent={5} color="secondary" className={classes.badge}>
                            <Bookmark className={classes.icon} />
                        </Badge>
                        <Avatar src="/broken-image.jpg" style={{ width: 30, height: 30 }} />
                    </>
                )}
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar