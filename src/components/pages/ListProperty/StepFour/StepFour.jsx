import React from "react";
import { Box, InputBase, Paper, Typography } from '@material-ui/core';
import useStyles from "./style";

const StepFour = () => {

    const classes = useStyles();

    return (
        <Box className={classes.stepfour}>
            <Typography variant="h5" pt={2} style={{ fontSize: "25px", paddingTop: "10px"}}>Show the Image of your place?</Typography>
            <Paper variant="outlined" square elevation={16} className={classes.paper}>
                <Typography variant="caption" pt={2} style={{ fontSize: "12px", paddingTop: "10px"}}>Add atleast one images showing the room and its surroundings.</Typography>
                <InputBase type="file" className={classes.roomImg} />
            </Paper>
        </Box>
    )
}

export default StepFour;