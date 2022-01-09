import { InputBase, Button, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { sendResetCodeToMail } from "../../../../Redux/actions";
import messageSent from "../../../../assets/illustrations/mail.png";
import useStyles from "./style";

const ForgotPassword = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const [display, setDisplay] = useState(false);
    const [newPassword, setNewPassword] = useState({
        newPassword: "",
        confirmNewPassword: "",
        email: "",
    });
    const [passwordMatch, setPasswordMatch] = useState(true);

    const handleSend = () => {
        setDisplay(true);
        dispatch(sendResetCodeToMail(newPassword.email))
    };

    const handleChange = () => {

    }

    const handleSubmit = () => {

    }

    return (
        <div className={classes.forgotPassword}>
            { !display ? (
                <>
                    <Typography gutterBottom variant="subtitle1" className={classes.recover}>RECOVER YOUR PASSWORD</Typography>
                    <Typography gutterBottom variant="subtitle2" className={classes.send}>We'll send you a code to reset your password</Typography>
                    <InputBase placeholder="Enter your email address" className={classes.enterEmail} />
                    <Button variant="contained" className={classes.sendPassword} onClick={handleSend}>
                        Send code to my email
                    </Button>
                </>
            ) : (
                <>
                    <img src={messageSent} alt="mail sent" className={classes.img} />
                    <Typography gutterBottom variant="subtitle1" className={classes.recover}>Code sent, please check your mail box</Typography>
                    <form method='POST' onChange={handleChange} onSubmit={handleSubmit}>
                        <InputBase placeholder="Enter Code" className={classes.input} name="code" type="number" />
                        <Typography variant="caption" color="secondary" style={{textAlign: "center"}}></Typography>
                        <InputBase placeholder="New Password" className={classes.input} name="newpassword" />
                        <Typography variant="caption" color="secondary" style={{textAlign: "center"}}></Typography>
                        <InputBase placeholder="Confirm Password" type="password" className={classes.input} name="password" />
                        <Typography variant="caption" color="secondary" style={{textAlign: "center"}}></Typography>
                        <Button variant="contained" href="/sign_in" className={classes.sendPassword}>
                            Reset and Sign In
                        </Button>
                    </form>
                </>
            ) }
        </div>
    )
}

export default ForgotPassword;
