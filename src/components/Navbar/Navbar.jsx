import { AppBar, Toolbar, Button, Badge, Avatar, useMediaQuery } from '@material-ui/core';
import { Notifications, Bookmark } from '@material-ui/icons';
import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import useStyles from './style';
import logo from '../../assets/images/void.png';

const Navbar = () => {

    const [scrolled, setScrolled] = useState(false);
    const [isAuthPage, setIsAuthPage] = useState(false);
    const { pathname: location } = useLocation();

    const isAuthenticated = false;
    const classes = useStyles({ scrolled });
    const isMobile = useMediaQuery('(max-width: 900px)');
    
    useEffect(()=>{
        if (location === "/sign_up" || location === "/sign_in" || location === "/forgot_password") {
            setScrolled(true);
            setIsAuthPage(true);
        } else{
            setIsAuthPage(false);
        };

    }, []);

    
    window.onscroll = () => {
        if (!isAuthPage) {
            setScrolled(window.pageYOffset > 10);
        }
        return () => window.onscroll = null;
    };


    return (
        <AppBar position="fixed" className={classes.appbar}>
            <Toolbar className={classes.toolbar}>
                <div className={classes.logoWrapper}>
                    <img src={logo} className={classes.logo} alt="logo_void" />
                    {!isAuthPage && !isMobile && (
                        <>
                            <Button variant="contained" className={classes.navigation} href="/">Home</Button>
                            <Button variant="outlined" className={classes.navigation} href="/blog">Blog</Button>
                            <Button variant="outlined" className={classes.navigation} href="/contact">Contact</Button>
                            <Button variant="outlined" className={classes.navigation} href="/about">About</Button>    
                            <Button variant="outlined" className={classes.navigation} href="/support">Support</Button>    
                        </>
                    )}
                </div>
                <div className={classes.menus}>
                {!isAuthPage && !isAuthenticated && (
                    <>
                        <Button variant="contained" className={classes.signup} href="/sign_up">Sign Up</Button>
                        <Button variant="outlined" className={classes.signin} href="/sign_in">Sign In</Button>    
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

export default Navbar;