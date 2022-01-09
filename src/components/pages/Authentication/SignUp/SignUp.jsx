import React, { useState } from 'react';
import useStyles from "./style";
import { Box, Divider, Button, InputBase, Typography } from "@material-ui/core";
import {Facebook} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { createUser } from "../../../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";

const SignUp = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const signup_failed_message = useSelector(state => state.data.signup_failed_message);
    const { password, user_name, first_name, last_name, email } = signup_failed_message;

    const initialFormData = {
        first_name: "",
        last_name: "",
        password: "",
        user_name: "",
        email: "",
    };

    const [formData, setFormData] = useState(initialFormData);
    const [passwordMatch, setPasswordMatch] = useState(true);

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        })
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (formData.password !== formData.confirm_password) return setPasswordMatch(false)
        dispatch(createUser(formData));
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
                    <Typography variant="caption" color="secondary" style={{textAlign: "center"}}>{user_name[0]}</Typography>
                    <InputBase name="email" placeholder="Email Address" className={classes.input} />
                    <Typography variant="caption" color="secondary" style={{textAlign: "center"}}>{email[0]}</Typography>
                    <InputBase name="password" placeholder="Password" type="password" className={classes.input} />
                    <Typography variant="caption" color="secondary" style={{textAlign: "center"}}>{password[0]}</Typography>
                    <InputBase name="confirm_password" placeholder="Confirm Password" type="password" className={classes.input} />
                    <Typography variant="caption" color="secondary" style={{textAlign: "center"}}>{ !passwordMatch && "Password doesn't match"}</Typography>
                    <InputBase name="first_name" placeholder="First Name" className={classes.input} />
                    <Typography variant="caption" color="secondary" style={{textAlign: "center"}}>{first_name[0]}</Typography>
                    <InputBase name="last_name" placeholder="Last Name" className={classes.input} />
                    <Typography variant="caption" color="secondary" style={{textAlign: "center"}}>{last_name[0]}</Typography>
                    <Button variant="contained" type="submit" className={classes.register}>Register Now</Button>
                </form>
            </Box>
            <Divider />
            <Typography variant="subtitle1" className={classes.haveAccount}>Already have an account? <Link to="/sign_in">Sign in</Link></Typography>
        </div>
    )
}

export default SignUp;
