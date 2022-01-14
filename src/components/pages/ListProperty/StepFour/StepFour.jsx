import React from "react";
import { Box, InputBase, Paper, Typography } from '@material-ui/core';
import useStyles from "./style";

const StepFour = () => {

    const classes = useStyles();

    return (
        <Box className={classes.stepfour}>
            <Typography variant="h5" pt={2} style={{ fontSize: "25px", paddingTop: "10px"}}>Show the Image of your place?</Typography>
            <Paper variant="outlined" square elevation={16} className={classes.paper}>
                <Typography variant="caption" pt={2} style={{ fontSize: "12px", paddingTop: "10px"}}>Add atleast one image showing the room and its surroundings.</Typography>
                <InputBase type="file" inputProps={{multiple: true}} name="filefield" className={classes.roomImg} />
            </Paper>
            <Paper variant="outlined" square elevation={16} className={classes.paper}>
                <Typography variant="caption" pt={2} style={{ fontSize: "12px", paddingTop: "10px"}}>Add compound images. Note that this image will be seen first by prospective customers</Typography>
                <InputBase type="file" inputProps={{multiple: true}} className={classes.roomImg} />
            </Paper>
        </Box>
    );
};

export default StepFour;