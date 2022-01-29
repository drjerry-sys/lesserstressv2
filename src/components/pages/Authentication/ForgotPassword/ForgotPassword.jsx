import { InputBase, Button, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { useNavigate } from "react-router";
import axiosInstance from "../../../../Redux/axioscall";
import messageSent from "../../../../assets/illustrations/mail.png";
import useStyles from "./style";

const ForgotPassword = () => {

    const classes = useStyles();
    const navigate = useNavigate();
    const [errormsg, setErrorMsg] = useState({
        wrongEmail: '',
        wrongCode: '',
        passwordMatch: ''
    });
    const [display, setDisplay] = useState(false);
    const [detailss, setDetailss] = useState({
        password: "",
        confirmNewPassword: "",
        email: "",
        code: ""
    });

    const handleSend = () => {
        // setDisplay(true);
        // dispatch(sendResetCodeToMail(newPassword.email))
        if (detailss.email !== "") {
            axiosInstance.post(`auth/reset_password/code`, {email: detailss.email})
            .then(res=>{
                if (res.status === 400) {
                    setDisplay(false);
                    setErrorMsg({...errormsg, wrongEmail: 'Enter valid email address'})
                } else {
                    setDisplay(true);
                }
            })
            .catch(err=>{
                console.log(err);
                setErrorMsg({...errormsg, wrongEmail: 'server error, try again!'});
            })
        } else {
            setErrorMsg({...errormsg, wrongEmail: 'this field is required!'});
        }
    };

    const handleChange = (event) => {
        setDetailss({
            ...detailss,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password, code, confirmNewPassword } = detailss;
        if ((password === confirmNewPassword) && (password !== '')) {
            axiosInstance.post("auth/reset_password/reset", { email, password, code: Number(code) })
            .then(res=>{
                if (res.status === 400) {
                    setErrorMsg({...errormsg, wrongCode: res.data.message});
                } else (
                    navigate('/sign_in')
                )
            })
            .catch(err=>{
                console.log(err)
            })
        } else {
            setErrorMsg({...errormsg, passwordMatch: 'password don\'t match'});
        };
    };

    return (
        <div className={classes.forgotPassword}>
            { !display ? (
                <>
                    <Typography gutterBottom variant="subtitle1" className={classes.recover}>RECOVER YOUR PASSWORD</Typography>
                    <Typography gutterBottom variant="subtitle2" className={classes.send}>We'll send you a code to reset your password</Typography>
                    <InputBase sele placeholder="Enter your email address" name="email" type="email" onChange={handleChange} className={classes.enterEmail} />
                    <Typography variant="caption" color="secondary" style={{textAlign: "center"}}>{errormsg.wrongEmail}</Typography>
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
                        <Typography variant="caption" color="secondary" style={{textAlign: "center"}}>{errormsg.wrongCode}</Typography>
                        <InputBase placeholder="New Password" type="password" className={classes.input} name="password" />
                        <InputBase placeholder="Confirm Password" type="password" className={classes.input} name="confirmNewPassword" />
                        <Typography variant="caption" color="secondary" style={{textAlign: "center"}}>{errormsg.passwordMatch}</Typography>
                        <Button variant="contained" className={classes.sendPassword} type="submit">
                            Reset and Sign In
                        </Button>
                    </form>
                </>
            ) }
        </div>
    )
}

export default ForgotPassword;
