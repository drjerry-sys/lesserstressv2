import { Box, Checkbox, Divider, FormControlLabel, FormGroup, Paper, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from "./style";

const StepTwo = ({ formData, setFormData }) => {

    const classes = useStyles();

    const handleChange = (e) => {
        setFormData({
            ...formData, [e.target.name]: e.target.checked
        })
    }

    return (
        <Box>
            <Typography variant="h5" pt={2} style={{ fontSize: "25px", paddingTop: "10px"}}>What facilities are at your place?</Typography>
            <Paper variant="outlined" square elevation={16} className={classes.paper}>
                <Typography variant="h5" style={{ fontSize: "20px"}}>General</Typography>
                <FormGroup style={{padding: "6px 20px"}}>
                    {formData.radio === 'no' && (
                        <>
                            <FormControlLabel control={<Checkbox checked={formData.powerSupply} name="powerSupply" onChange={handleChange} size="small" />} label="Electricity" />
                            <FormControlLabel control={<Checkbox size="small" />} checked={formData.generator} name='generator' onChange={handleChange} label="Generator" />
                            <FormControlLabel control={<Checkbox size="small" />} checked={formData.borehole} name="borehole" onChange={handleChange} label="Bore-hole water" />
                            <FormControlLabel control={<Checkbox size="small" />} checked={formData.wellWater} name="wellWater" onChange={handleChange} label="Well water" />
                            <FormControlLabel control={<Checkbox size="small" />} checked={formData.garage} name="garage" onChange={handleChange} label="Garage" />
                        </>
                    )}
                    <FormControlLabel control={<Checkbox size="small" />} checked={formData.airCondition} name="airCondition" onChange={handleChange} label="Air Conditioning" />
                </FormGroup>
                <Divider className={classes.divider} />
                <Typography variant="h5" style={{ fontSize: "20px"}}>Cooking and Cleaning</Typography>
                <FormGroup style={{padding: "6px 20px"}}>
                    <FormControlLabel control={<Checkbox defaultChecked size="small" />} checked={formData.kitchen} name='kitchen' onChange={handleChange} label="Kitchen" />
                    {formData.radio === 'no' && (
                        <FormControlLabel control={<Checkbox size="small" />} checked={formData.washingMachine} name='washingMachine' onChange={handleChange} label="Washing Machine" />
                    )}
                    <FormControlLabel control={<Checkbox size="small" />} checked={formData.cleaner} name='cleaner' onChange={handleChange} label="Cleaner" />
                    <FormControlLabel control={<Checkbox size="small" />} checked={formData.bathtube} name='bathtube' onChange={handleChange} label="Bath Tube" />
                </FormGroup>
                <Divider className={classes.divider} />
                <Typography variant="h5" style={{ fontSize: "20px"}}>Room Qualities</Typography>
                <FormGroup style={{padding: "6px 20px"}}>
                    <FormControlLabel control={<Checkbox defaultChecked size="small" />} checked={formData.wardrobe} name='wardrobe' onChange={handleChange} label="Wardrobe" />
                </FormGroup>
                <Divider className={classes.divider} />
                <Typography variant="h5" style={{ fontSize: "20px"}}>Entertainment</Typography>
                <FormGroup style={{padding: "6px 20px"}}>
                    <FormControlLabel control={<Checkbox defaultChecked size="small" />} checked={formData.flatscreenTV} name='flatscreenTV' onChange={handleChange} label="Flat Screen TV" />
                    {formData.radio === 'no' && (
                        <FormControlLabel control={<Checkbox size="small" />} checked={formData.swimmingPool} name='swimmingPool' onChange={handleChange} label="Swimming Pool" />
                    )}
                </FormGroup>
            </Paper>
        </Box>
    )
}

export default StepTwo;