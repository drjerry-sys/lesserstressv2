import { Box, Button, Divider, InputBase, Typography } from '@material-ui/core';
import { Facebook } from '@material-ui/icons';
import { Link } from "react-router-dom";
import React from 'react'
import useStyles from "./style";

const SignIn = () => {

    const classes = useStyles();

    return (
        <div className={classes.signup}>
            <Box className={classes.socialMedia}>
                <Typography variant="subtitle1" className={classes.sign}>SIGN UP TO CONTINUE</Typography>
                <div className={classes.facebook}>
                    <Facebook className={classes.icon} />
                    <Typography variant="subtitle1" className={classes.socialText}>Continue with Facebook</Typography>
                </div>
                {/* <div className={classes.google}>
                    <Facebook />
                </div> */}
            </Box>
            <Divider />
            <Box className={classes.auth}>
                <InputBase placeholder="username  or Email" className={classes.input} />
                <InputBase placeholder="password" type="password" className={classes.input} />
                <Button variant="contained" className={classes.register}>Sign In</Button>
            </Box>
            <Divider />
            <Typography variant="subtitle1" className={classes.haveAccount}>Don't have an account? <Link to="/sign_up">Sign up</Link></Typography>
            <Divider />
            <Typography variant="subtitle2" className={classes.haveAccount}><Link to="/forgot_password" style={{textDecoration: "none", color: "grey"}}>Don't have an account?</Link></Typography>
        </div>
    )
}

export default SignIn
