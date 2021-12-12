import { InputBase, Button, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import messageSent from "../../../../assets/illustrations/mail.png";
import useStyles from "./style";

const ForgotPassword = () => {

    const classes = useStyles();
    const [display, setDisplay] = useState(false);

    const handleSend = () => {
        setDisplay(true);
    };

    return (
        <div className={classes.forgotPassword}>
            { !display ? (
                <>
                    <Typography gutterBottom variant="subtitle1" className={classes.recover}>RECOVER YOUR PASSWORD</Typography>
                    <Typography gutterBottom variant="subtitle2" className={classes.send}>We'll send you a link to reset your password</Typography>
                    <InputBase placeholder="Enter your email address" className={classes.enterEmail} />
                    <Button variant="contained" className={classes.sendPassword} onClick={handleSend}>
                        Send password to email
                    </Button>
                </>
            ) : (
                <>
                    <img src={messageSent} alt="mail sent" className={classes.img} />
                    <Typography gutterBottom variant="subtitle1" className={classes.recover}>Password sent, please ceck your mail box</Typography>
                    <Button variant="contained" href="/" className={classes.sendPassword}>
                        Go back to Homepage
                    </Button>
                    <Button variant="contained" href="/sign_in" className={classes.sendPassword}>
                        Sign In
                    </Button>
                </>
            ) }
        </div>
    )
}

export default ForgotPassword;
