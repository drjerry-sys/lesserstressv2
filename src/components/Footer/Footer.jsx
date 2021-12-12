import React from 'react';
import useStyles from "./style";
import { Link } from "react-router-dom";
import logo from '../../assets/images/void.png';
import { Container, Typography, Box, Input, Button, useMediaQuery, CssBaseline } from "@material-ui/core";

const Footer = () => {

    const classes = useStyles();
    const isMobile = useMediaQuery('(max-width: 900px)');

    return (
        <Box className={classes.footer}>
            <CssBaseline />
            <Container>
                <div className={classes.subscribeWrapper}>
                    <Typography variant="h1" className={classes.saveTypo}>Save time, save money</Typography>
                    <Typography variant="body2" gutterBottom className={classes.subscribeTypo}>Subscribe and we'll send you best deals</Typography>
                    <Box className={classes.subscribeBox}>
                        <Input placeholder="Email Address" className={classes.emailbox} />
                        <Button variant="contained" size="medium" className={classes.subscribe}>Subscribe</Button>
                    </Box>
                </div>
                <div className={classes.footerDetails}>
                    <div className={classes.footerLinks}>
                        <ul className={classes.footerUl}>
                            <li><img src={logo} alt="void" style={{height: "18px"}} /></li>
                            <li><Link to="/blog" className={classes.link}>Home</Link></li>
                            <li><Link to="/blog" className={classes.link}>Blog</Link></li>
                            <li><Link to="/blog" className={classes.link}>Support Us</Link></li>
                            <li><Link to="/blog" className={classes.link}>Contact Us</Link></li>
                            <li><Link to="/blog" className={classes.link}>Report a bug</Link></li>
                        </ul>
                        <ul className={classes.footerUl}>
                            <li>Areas</li>
                            <li><Link to="/blog" className={classes.link}>Asheriafa</Link></li>
                            <li><Link to="/blog" className={classes.link}>Damico</Link></li>
                            <li><Link to="/blog" className={classes.link}>Mayfair</Link></li>
                            <li><Link to="/blog" className={classes.link}>Lagere</Link></li>
                            <li><Link to="/blog" className={classes.link}>see more...</Link></li>
                        </ul>
                        {!isMobile && (
                            <ul className={classes.footerUl}>
                                <li>Services</li>
                                <li><Link to="/blog" className={classes.link}>Accomodation</Link></li>
                                <li><Link to="/blog" className={classes.link}>Get a Roommate</Link></li>
                                <li><Link to="/blog" className={classes.link}>Community</Link></li>
                                <li><Link to="/blog" className={classes.link}>Campus Articles</Link></li>
                                <li className={classes.link}>show on map</li>
                            </ul>
                        )}
                    </div>
                    <Typography variant="h1" className={classes.copyright}>Copyright © Void { new Date().getFullYear() }. All rights reserved.</Typography>
                </div>
            </Container>
        </Box>
    )
};

export default Footer;