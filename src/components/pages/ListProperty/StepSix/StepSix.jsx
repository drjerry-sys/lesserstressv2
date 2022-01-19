import { Box, Paper, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from "./style";

const StepSix = ({ formData, setFormData }) => {

    const classes = useStyles();

    const handleSelect = (e)=> {
        setFormData({
            ...formData, ownerType: e.target.value
        })
    }

    return (
        <Box className={classes.stepsix}>
            <Typography variant="h5" pt={2} style={{ fontSize: "25px", paddingTop: "10px"}}>Parthner verification</Typography>
            <Paper variant="outlined" square elevation={16} className={classes.paper}>
                <Typography variant="subtitle2" style={{color: "#A0A0A0"}}>
                To comply with various legal and regulatory requirements, we need to collect and verify some info about you and your property.
                </Typography>
                <Typography variant="subtitle2" style={{paddingTop: "10px"}}>
                Is the accommodation owned by an individual or business entity?
                <select onChange={handleSelect} value={formData.ownerType} style={{color: "#A0A0A0", width: "100%", padding: "5px"}}>
                    {/* <option value="none">select an option</option> */}
                    <option value="individual">Individual running a business</option>
                    <option value="business">a business entity</option>
                </select>
                </Typography>
            </Paper>
        </Box>
    )
}

export default StepSix;