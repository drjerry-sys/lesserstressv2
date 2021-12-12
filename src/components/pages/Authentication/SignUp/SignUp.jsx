import React from 'react';
import useStyles from "./style";
import { Box, Divider, Button, InputBase, Typography } from "@material-ui/core";
import {Facebook} from "@material-ui/icons";
import { Link } from "react-router-dom";

const SignUp = () => {

    const classes = useStyles();

    return (
        <div className={classes.signup}>
            <Box className={classes.socialMedia}>
                <Typography variant="subtitle1" className={classes.sign}>SIGN UP TO CONTINUE</Typography>
                <div className={classes.facebook}>
                    <Facebook className={classes.icon} />
                    <Typography variant="subtitle1" className={classes.socialText}>Sign up with Facebook</Typography>
                </div>
                {/* <div className={classes.google}>
                    <Facebook />
                </div> */}
            </Box>
            <Divider />
            <Box className={classes.auth}>
                <InputBase placeholder="username" className={classes.input} />
                <InputBase placeholder="Email Address" className={classes.input} />
                <InputBase placeholder="Password" className={classes.input} />
                <InputBase placeholder="Confirm password" className={classes.input} />
                <InputBase placeholder="First Name" className={classes.input} />
                <InputBase placeholder="Last Name" className={classes.input} />
                <Button variant="contained" className={classes.register}>Register Now</Button>
            </Box>
            <Divider />
            <Typography variant="subtitle1" className={classes.haveAccount}>Already have an account? <Link to="/sign_in">Sign in</Link></Typography>
        </div>
    )
}

export default SignUp;
