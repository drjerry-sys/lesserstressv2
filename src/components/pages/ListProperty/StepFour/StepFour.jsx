import React from "react";
import { Box, InputBase, InputLabel, Paper, Typography } from '@material-ui/core';
import useStyles from "./style";

const StepFour = ({ formData, setFormData }) => {

    const classes = useStyles();

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.files
        });
    };

    return (
        <form action="">
            <Box className={classes.stepfour}>
            <Typography variant="h5" pt={2} style={{ fontSize: "25px", paddingTop: "10px"}}>Show the Image of your place?</Typography>
                {formData.radio === 'no' && (
                    <Paper variant="outlined" square elevation={16} className={classes.paper}>
                        <Typography variant="caption" pt={2} style={{ fontSize: "12px", paddingTop: "10px"}}>Add compound images. Note that this image will be seen first by prospective customers</Typography>
                        <InputBase type="file"  onChange={handleChange} style={{display: 'none'}} inputProps={{multiple: true, accept: 'image/*'}} id="comp" name="comp_image" className={classes.roomImg} />
                        <InputLabel htmlFor="comp" className={classes.roomImg} >{!formData.comp_image ? 'select files' : `selected files (${Object.keys(formData.comp_image).length} files)`}</InputLabel>
                        <Typography variant="caption" pt={2} style={{ fontSize: "12px", paddingTop: "10px", color: 'red'}}>{formData.open ? 'Ensure no image name is more than 100 characters' : ''}</Typography>
                    </Paper>
                )}
                <Paper variant="outlined" square elevation={16} className={classes.paper}>
                    <Typography variant="caption" pt={2} style={{ fontSize: "12px", paddingTop: "10px"}}>Add atleast one image showing the room and its surroundings.</Typography>
                    <InputBase type="file" inputProps={{multiple: true, accept: 'image/*'}} style={{display: 'none'}} id="room" onChange={handleChange} name="room_image" />
                    <InputLabel htmlFor="room" className={classes.roomImg}>{!formData.room_image ? 'select files' : `selected files (${Object.keys(formData.room_image).length} files)`}</InputLabel>
                    <Typography variant="caption" pt={2} style={{ fontSize: "12px", paddingTop: "10px", color: 'red'}}>{formData.open ? 'Ensure no image name is more than 100 characters' : ''}</Typography>
                </Paper>
            </Box>
        </form>
    );
};

export default StepFour;