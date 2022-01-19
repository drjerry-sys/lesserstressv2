import React, { useState } from "react";
import { Box, InputBase, InputLabel, Paper, Typography } from '@material-ui/core';
import useStyles from "./style";

const StepFour = () => {

    const classes = useStyles();

    const [formData, setFormData] = useState({
        room_image: '',
        comp_image: ''
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.files
        })
    };

    return (
        <Box className={classes.stepfour}>
            <Typography variant="h5" pt={2} style={{ fontSize: "25px", paddingTop: "10px"}}>Show the Image of your place?</Typography>
            <Paper variant="outlined" square elevation={16} className={classes.paper}>
                <Typography variant="caption" pt={2} style={{ fontSize: "12px", paddingTop: "10px"}}>Add atleast one image showing the room and its surroundings.</Typography>
                <InputBase type="file" inputProps={{multiple: true}} onChange={handleChange} name="comp_image" className={classes.roomImg} />
            </Paper>
            <Paper variant="outlined" square elevation={16} className={classes.paper}>
                <Typography variant="caption" pt={2} style={{ fontSize: "12px", paddingTop: "10px"}}>Add compound images. Note that this image will be seen first by prospective customers</Typography>
                <InputBase type="file" onChange={handleChange} inputProps={{multiple: true}} id="room" name="room_image" className={classes.roomImg} />
                {/* <InputLabel htmlFor="room">select files</InputLabel> */}
            </Paper>
        </Box>
    );
};

export default StepFour;