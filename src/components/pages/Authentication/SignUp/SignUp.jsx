import React, { useState } from 'react';
import useStyles from "./style";
import { Box, Divider, Button, InputBase, Typography } from "@material-ui/core";
import {Facebook} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { createUser } from "../../../../Redux/actions";
import { useDispatch } from "react-redux";

const SignUp = () => {

    const classes = useStyles();
    const dispatch = useDispatch();

    const initialFormData = {
        first_name: "",
        password: "",
        user_name: "",
        email: "",
    };

    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        })
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(createUser(formData));
        console.log(formData);
    };

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
                <form method="POST" onChange={handleChange} onSubmit={handleSubmit}>
                    <InputBase name="user_name" placeholder="username" className={classes.input} />
                    <InputBase name="email" placeholder="Email Address" className={classes.input} />
                    <InputBase name="password" placeholder="Password" className={classes.input} />
                    <InputBase placeholder="Confirm password" className={classes.input} />
                    <InputBase name="first_name" placeholder="First Name" className={classes.input} />
                    <InputBase name="last_name" placeholder="Last Name" className={classes.input} />
                    <Button variant="contained" type="submit" className={classes.register}>Register Now</Button>
                </form>
            </Box>
            <Divider />
            <Typography variant="subtitle1" className={classes.haveAccount}>Already have an account? <Link to="/sign_in">Sign in</Link></Typography>
        </div>
    )
}

export default SignUp;
