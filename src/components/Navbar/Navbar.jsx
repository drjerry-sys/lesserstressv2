import { AppBar, Toolbar, Button, Badge, Avatar, useMediaQuery, Box, Divider, ClickAwayListener } from '@material-ui/core';
import { Notifications, Bookmark, MoveToInbox } from '@material-ui/icons';
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { signOut } from "../../Redux/actions";
import { useDispatch } from "react-redux";
import useStyles from './style';
import logo from '../../assets/images/void.png';

const Navbar = ({ isLoggedIn: isAuthenticated }) => {

    const [scrolled, setScrolled] = useState(false);
    const [isAuthPage, setIsAuthPage] = useState(false);
    const [manage, setManage] = useState(false);
    const dispatch = useDispatch();
    const { pathname: location } = useLocation();
    const navigate = useNavigate()

// console.log(isAuthenticated);

    const classes = useStyles({ scrolled });
    const isMobile = useMediaQuery('(max-width: 900px)');

    const handleMenu = (val) => {
        if (val==="notify") {
            navigate("/")
        } else if (val === "bookmark") {
            navigate("/settings/bookmark")
        } else if (val === "request") {
            navigate("/list_property/property_request")
        }
    };
    
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

    const handleLogout = () => {
        setManage(false)
        dispatch(signOut())
    };

    return (
        <AppBar position="fixed" className={classes.appbar}>
            <Toolbar className={classes.toolbar}>
                <div className={classes.logoWrapper}>
                    <img src={logo} className={classes.logo} alt="logo_void" />
                    {!isAuthPage && !isMobile && location.slice(0,14) !== '/list_property' && (
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
                    {!isAuthPage && !isMobile && location.slice(0,14) === "/list_property" && (
                        <>
                            <Button variant="contained" className={classes.navigation} style={{backgroundColor: location === "/list_property" && "blue"}} href="/list_property">Home</Button>
                            <Button variant="contained" className={classes.navigation} style={{backgroundColor: location === "/list_property/manage_property" && "blue"}} href="/list_property/manage_property">Manage Property</Button>
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
                        {location.slice(0,14) !== '/list_property' && (
                            <>
                                <Badge variant="dot" color="secondary" className={classes.badge} onClick={()=>handleMenu("notify")}>
                                    <Notifications className={classes.icon} />
                                </Badge>
                                <Badge badgeContent={5} color="secondary" className={classes.badge} onClick={()=>handleMenu("bookmark")}>
                                    <Bookmark className={classes.icon} />
                                </Badge>
                            </>
                        )}
                        {location.slice(0,14) === '/list_property' && (
                            <>
                                <Button variant="outlined" size="small" style={{color: 'white', border: '1px solid #a0a0a0', marginRight: '10px'}} href="">create space</Button>
                                <Badge badgeContent={5} color="secondary" className={classes.badge} onClick={()=>handleMenu("request")}>
                                    <MoveToInbox className={classes.icon} />
                                </Badge>
                            </>
                        )}
                        <Avatar src="/broken-image.jpg"  onClick={() => setManage(!manage)} className={classes.profileAvatar} />
                        {manage && (
                            <ClickAwayListener onClickAway={() => setManage(false)}>
                                <Box className={classes.userMenu}>
                                    {isMobile && (
                                        <>
                                            <Link to="/" className={classes.acntSetting}>Home</Link><br />
                                            <Link to="/blog" className={classes.acntSetting}>Blog</Link><br />
                                            <Link to="/community" className={classes.acntSetting}>Community</Link>
                                            <Divider style={{margin: "5px 0"}} />
                                        </>
                                    )}
                                    <Link to="/settings" onClick={()=>setManage(false)} className={classes.acntSetting}>Account setting</Link>
                                    <Divider style={{margin: "5px 0"}} />
                                    <Link to="/" onClick={handleLogout} className={classes.acntSetting}>Log out</Link>
                                    <Divider style={{margin: "5px 0"}} />
                                    <Button variant="contained" size="small" href="/list_property">List Property</Button>
                                </Box>
                            </ClickAwayListener>
                        )}
                    </>
                )}
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;