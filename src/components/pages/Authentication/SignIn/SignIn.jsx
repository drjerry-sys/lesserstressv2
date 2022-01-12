import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../../../Redux/actions";
import { Box, Button, Divider, InputBase, Typography } from '@material-ui/core';
import { Facebook } from '@material-ui/icons';
import { Link } from "react-router-dom";
import useStyles from "./style";

const SignIn = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const { detail } = useSelector(state => state.data.signin_failed_message);

    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    });

    const handleChange = (event) => {
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value
        })
    };

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(signIn(credentials));       
    };

    return (
        <div className={classes.signup}>
            <Box className={classes.socialMedia}>
                <Typography variant="subtitle1" className={classes.sign}>SIGN IN TO CONTINUE</Typography>
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
                <form method='POST' onChange={handleChange} onSubmit={handleSubmit}>
                    <Typography variant="caption" color="secondary" style={{textAlign: "center"}}>
                        {detail}
                    </Typography>
                    <InputBase placeholder="Email" className={classes.input} name="email" />
                    <InputBase placeholder="password" type="password" className={classes.input} name="password" />
                    <Button variant="contained" type="submit" className={classes.register}>Sign In</Button>
                </form>
            </Box>
            <Divider />
            <Typography variant="subtitle1" className={classes.haveAccount}>Don't have an account? <Link to="/sign_up">Sign up</Link></Typography>
            <Divider />
            <Typography variant="subtitle2" className={classes.haveAccount}><Link to="/forgot_password" style={{textDecoration: "none", color: "grey"}}>Forgot password?</Link></Typography>
        </div>
    )
}

export default SignIn;