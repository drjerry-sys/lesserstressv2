import { Box, InputBase, Button, Divider, InputLabel, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from "./style";

const Payment = () => {

    const classes = useStyles();

    return (
        <div>
            <Box className={classes.right}>
                <Typography variant="h5">Payment Details</Typography>
                <Typography variant="subtitle2" style={{color: "#A0A0A0"}} gutterBottom >Securely add or remove card details to receive your payments as an agent</Typography>
                <Divider />
                <div className={classes.payment}>
                    <Typography gutterBottom variant="body2">Payments card</Typography>
                    <div>
                        <div>
                            <InputLabel>Cardholder's Name</InputLabel>
                            <InputBase style={{width: "100%"}} className={classes.inputBase}/>
                        </div>
                        <div>
                            <InputLabel>Card Number</InputLabel>
                            <InputBase style={{width: "100%"}} className={classes.inputBase} />
                        </div>
                        <div>
                            <InputLabel>Expiration Date</InputLabel>
                            <InputBase placeholder="MM/YY" className={classes.inputBase} />
                        </div>
                        <div>
                            <InputLabel>CVC *</InputLabel>
                            <InputBase className={classes.inputBase} />
                        </div>
                    </div>
                    <div style={{display: "flex", flexDirection: "row-reverse", justifyContent: "space-between"}}>
                        <div><Button variant="contained" color="primary">Save</Button></div>
                    </div>
                </div>
            </Box>
        </div>
    )
}

export default Payment
