import React from 'react';
import useStyles from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import { Typography, Grid, Box, Container, Divider} from "@material-ui/core";
import { AssignmentOutlined, BookmarksOutlined, LockOutlined, NotificationsNoneOutlined, PaymentOutlined, PersonAddOutlined } from '@material-ui/icons';
import PersonalDetails from "./PersonalDetails";
import Security from "./Security";
import Bookmarks from "./Bookmarks";

const SettingsOptions = () => {

    const classes = useStyles();
    const location = useLocation().pathname;
    const navigate = useNavigate()
    const pages = {
        "/settings/myprofile": <PersonalDetails />,
        "/settings/security": <Security />,
        "/settings/bookmark": <Bookmarks />,
    };
    
    const handleClick = (val) => {
        if (val === "person") {
            navigate("/settings/myprofile")
        } else if (val === "secure") {
            navigate("/settings/security")
        } else if (val === "bookmark") {
            navigate("/settings/bookmark")
        }
    }

    return (
        <div>
            <div className={classes.forNav}></div>
            <Container>
                <Grid container>
                    <Grid item xs={12} sm={12} md={2} lg={4}>
                        <div style={{  border: "1px solid #D0D0D0", marginTop: "30px" }}>
                            <Box className={classes.eachDiv} onClick={()=>handleClick("person")}>
                                <div className={classes.iconDiv}><PersonAddOutlined style={{fontSize: "15px"}} /></div>
                                <Typography variant="caption" className={classes.details}>Personal details</Typography>
                            </Box>
                            <Divider />
                            <Box className={classes.eachDiv} onClick={()=>handleClick("secure")}>
                                <div className={classes.iconDiv}><LockOutlined style={{fontSize: "15px"}} /></div>
                                <Typography variant="caption" className={classes.details}>Security</Typography>
                            </Box>
                            <Divider />
                            <Box className={classes.eachDiv} onClick={()=>handleClick("email")}>
                                <div className={classes.iconDiv}><NotificationsNoneOutlined style={{fontSize: "15px"}} /></div>
                                <Typography variant="caption" className={classes.details}>Email Notification</Typography>
                            </Box>
                            <Divider />
                            <Box className={classes.eachDiv} onClick={()=>handleClick("bookmark")}>
                                <div className={classes.iconDiv}><BookmarksOutlined style={{fontSize: "15px"}} /></div>
                                <Typography variant="caption" className={classes.details}>Bookmarks</Typography>
                            </Box>
                            <Divider />
                            <Box className={classes.eachDiv} onClick={()=>handleClick("payment")}>
                                <div className={classes.iconDiv}><PaymentOutlined style={{fontSize: "15px"}} /></div>
                                <Typography variant="caption" className={classes.details}>Payment Details</Typography>
                            </Box>
                            <Divider />
                            <Box className={classes.eachDiv} onClick={()=>handleClick("blog")}>
                                <div className={classes.iconDiv}><AssignmentOutlined style={{fontSize: "15px"}} /></div>
                                <Typography variant="caption" className={classes.details}>Blog</Typography>
                            </Box>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={10} lg={8}>
                        {pages[location]}
                    </Grid> 
                </Grid>
            </Container>
        </div>
    )
}

export default SettingsOptions;