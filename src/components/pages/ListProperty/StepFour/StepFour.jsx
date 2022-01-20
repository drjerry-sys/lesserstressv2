import React, { useState } from "react";
import { Box, InputBase, InputLabel, Paper, Typography } from '@material-ui/core';
import useStyles from "./style";

const StepFour = ({ page_no, formData, setFormData }) => {

    const classes = useStyles();
    const [imgTitle, setImageTitle] = useState();

    const handleChange = (event) => {
        setImageTitle(event.target.value)
        setFormData({
            ...formData,
            [event.target.name]: event.target.files
        })
    };

    return (
        <form action="" style={{display: page_no===3 ? 'block' : 'none'}}>
            <Box className={classes.stepfour}>
            <Typography variant="h5" pt={2} style={{ fontSize: "25px", paddingTop: "10px"}}>Show the Image of your place?</Typography>
                <Paper variant="outlined" square elevation={16} className={classes.paper}>
                    <Typography variant="caption" pt={2} style={{ fontSize: "12px", paddingTop: "10px"}}>Add atleast one image showing the room and its surroundings.</Typography>
                    <InputBase type="file" inputProps={{multiple: true}} style={{display: 'none'}} id="comp" onChange={handleChange} name="comp_image" />
                    <InputLabel htmlFor="comp" className={classes.roomImg}>{!formData.comp_image ? 'select files' : `select files (3 files)`}</InputLabel>
                </Paper>
                <Paper variant="outlined" square elevation={16} className={classes.paper}>
                    <Typography variant="caption" pt={2} style={{ fontSize: "12px", paddingTop: "10px"}}>Add compound images. Note that this image will be seen first by prospective customers</Typography>
                    <InputBase type="file" onChange={handleChange} style={{display: 'none'}} inputProps={{multiple: true}} id="room" name="room_image" className={classes.roomImg} />
                    <InputLabel htmlFor="room" className={classes.roomImg} >{!formData.room_image ? 'select files' : `select files (3 files)`}</InputLabel>
                </Paper>
            </Box>
        </form>
    );
};

export default StepFour;