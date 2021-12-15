import { Box, Container, Grid, Typography } from '@material-ui/core';
import { LockOutlined, AssignmentOutlined, PaymentOutlined, NotificationsNoneOutlined, PersonAddOutlined, TuneOutlined, BookmarksOutlined } from "@material-ui/icons";
import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from "./style";

const Settings = () => {

    const classes = useStyles();

    return (
        <div className={classes.setting}>
            <div className={classes.heading}></div>
            <Container className={classes.allSettings}>
                <Typography variant="h4" style={{fontWeight: 500}}>Account settings</Typography>
                <Typography gutterBottom style={{padding: "5px 0"}} variant="body2">Manage your experience</Typography>
                <Grid spacing={2} container>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Box className={classes.eachDiv}>
                            <div className={classes.iconDiv}><PersonAddOutlined /></div>
                            <div>
                                <Typography variant="h5" className={classes.details}>Personal details</Typography>
                                <Typography variant="body2" gutterBottom>Update your info and find out how it's used</Typography>
                                <Link to="" className={classes.managePersonal}><Typography variant="caption">Manage personal details</Typography></Link>
                            </div>
                        </Box>
                        <Box className={classes.eachDiv}>
                            <div className={classes.iconDiv}><LockOutlined /></div>
                            <div>
                                <Typography variant="h5" className={classes.details}>Security</Typography>
                                <Typography variant="body2" gutterBottom>Adjust your security settings and set up two-factor authentication</Typography>
                                <Link to="" className={classes.managePersonal}><Typography variant="caption">Manage account security</Typography></Link>
                            </div>
                        </Box>
                        <Box className={classes.eachDiv}>
                            <div className={classes.iconDiv}><NotificationsNoneOutlined /></div>
                            <div>
                                <Typography variant="h5" className={classes.details}>Email Notification</Typography>
                                <Typography variant="body2" gutterBottom>Decide what you want to be notified about and unsubscribe from what you don't</Typography>
                                <Link to="" className={classes.managePersonal}><Typography variant="caption">Manage notifications</Typography></Link>
                            </div>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Box className={classes.eachDiv}>
                            <div className={classes.iconDiv}><BookmarksOutlined /></div>
                            <div>
                                <Typography variant="h5" className={classes.details}>Bookmarks</Typography>
                                <Typography variant="body2" gutterBottom>check out your bookmarked accommodation</Typography>
                                <Link to="" className={classes.managePersonal}><Typography variant="caption">Manage bookmarks</Typography></Link>
                            </div>
                        </Box>
                        <Box className={classes.eachDiv}>
                            <div className={classes.iconDiv}><PaymentOutlined /></div>
                            <div>
                                <Typography variant="h5" className={classes.details}>Payment Details</Typography>
                                <Typography variant="body2" gutterBottom>Update your info and find out how it's used</Typography>
                                <Link to="" className={classes.managePersonal}><Typography variant="caption">Manage payment details</Typography></Link>
                            </div>
                        </Box>
                        <Box className={classes.eachDiv}>
                            <div className={classes.iconDiv}><AssignmentOutlined /></div>
                            <div>
                                <Typography variant="h5" className={classes.details}>Blog</Typography>
                                <Typography variant="body2" gutterBottom>check and update your written blogs</Typography>
                                <Link to="" className={classes.managePersonal}><Typography variant="caption">Manage articles</Typography></Link>
                            </div>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
};

export default Settings;
