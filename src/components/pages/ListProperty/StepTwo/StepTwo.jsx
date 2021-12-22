import { Box, Checkbox, Divider, FormControlLabel, FormGroup, Paper, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from "./style";

const StepTwo = () => {

    const classes = useStyles();

    return (
        <Box>
            <Typography variant="h5" pt={2} style={{ fontSize: "25px", paddingTop: "10px"}}>What facilities are at your place?</Typography>
            <Paper variant="outlined" square elevation={16} className={classes.paper}>
                <Typography variant="h5" style={{ fontSize: "20px"}}>General</Typography>
                <FormGroup style={{padding: "6px 20px"}}>
                    <FormControlLabel control={<Checkbox defaultChecked size="small" />} label="Electricity" />
                    <FormControlLabel control={<Checkbox size="small" />} label="Generator" />
                    <FormControlLabel control={<Checkbox size="small" />} label="Bore-hole water" />
                    <FormControlLabel control={<Checkbox size="small" />} label="Well water" />
                    <FormControlLabel control={<Checkbox size="small" />} label="Garage" />
                    <FormControlLabel control={<Checkbox size="small" />} label="Air Conditioning" />
                </FormGroup>
                <Divider className={classes.divider} />
                <Typography variant="h5" style={{ fontSize: "20px"}}>Cooking and Cleaning</Typography>
                <FormGroup style={{padding: "6px 20px"}}>
                    <FormControlLabel control={<Checkbox defaultChecked size="small" />} label="Kitchen" />
                    <FormControlLabel control={<Checkbox size="small" />} label="Washing Machine" />
                    <FormControlLabel control={<Checkbox size="small" />} label="Cleaner" />
                    <FormControlLabel control={<Checkbox size="small" />} label="Bath Tube" />
                </FormGroup>
                <Divider className={classes.divider} />
                <Typography variant="h5" style={{ fontSize: "20px"}}>Entertainment</Typography>
                <FormGroup style={{padding: "6px 20px"}}>
                    <FormControlLabel control={<Checkbox defaultChecked size="small" />} label="Flat Screen TV" />
                    <FormControlLabel control={<Checkbox size="small" />} label="Swimming Pool" />
                </FormGroup>
            </Paper>
        </Box>
    )
}

export default StepTwo;
