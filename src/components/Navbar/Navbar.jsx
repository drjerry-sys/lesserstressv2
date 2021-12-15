import { AppBar, Toolbar, Button, Badge, Avatar, useMediaQuery, Box, Divider } from '@material-ui/core';
import { Notifications, Bookmark } from '@material-ui/icons';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import useStyles from './style';
import logo from '../../assets/images/void.png';

const Navbar = () => {

    const [scrolled, setScrolled] = useState(false);
    const [isAuthPage, setIsAuthPage] = useState(false);
    const [manage, setManage] = useState(false);
    const { pathname: location } = useLocation();

    const isAuthenticated = true;
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
                            <Button variant="contained" className={classes.navigation} style={{backgroundColor: location === "/" && "blue"}} href="/">Home</Button>
                            <Button variant="contained" className={classes.navigation} style={{backgroundColor: location === "/roommates" && "blue"}} href="/roommates">Roommates</Button>
                            <Button variant="outlined" className={classes.navigation} style={{backgroundColor: location === "/blog" && "blue"}} href="/blog">Blog</Button>
                            <Button variant="outlined" className={classes.navigation} style={{backgroundColor: location === "/community" && "blue"}} href="/community">Community</Button>
                            <Button variant="outlined" className={classes.navigation} style={{backgroundColor: location === "/contact" && "blue"}} href="/contact">Contact</Button>
                            <Button variant="outlined" className={classes.navigation} style={{backgroundColor: location === "/about" && "blue"}} href="/about">About</Button>    
                            <Button variant="outlined" className={classes.navigation} style={{backgroundColor: location === "/support" && "blue"}} href="/support">Support</Button>    
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
                        <Avatar src="/broken-image.jpg"  onClick={() => setManage(!manage)} className={classes.profileAvatar} />
                        {manage && (
                            <Box className={classes.userMenu}>
                                <Link to="/settings" className={classes.acntSetting}>Account setting</Link>
                                <Divider style={{margin: "5px 0"}} />
                                <Link to="/" className={classes.acntSetting}>log out</Link>
                            </Box>
                        )}
                    </>
                )}
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;