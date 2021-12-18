import React, { useState } from 'react';
import useStyles from "./style";
import TrapFocus from "@material-ui/core/Unstable_TrapFocus";
import { Box, RadioGroup, Radio, FormControl, Paper, Typography, FormControlLabel, InputBase, MenuItem, Select, InputLabel } from '@material-ui/core';

const StepOne = () => {

    const classes = useStyles();
    const [others, setOthers] = useState(false);
    const [window, setWindow] = useState();

    const handleRadio = (event) => {
        let others = event.target.value;
        if (others === "others") {setOthers(true)} else {setOthers(false)};
    };


    return (
        <Box className={classes.propertyDetails}>
            <Typography variant="h4" style={{ fontSize: "25px", fontWeight: "500"}}>Property Details</Typography>
            <Paper variant="outlined" square elevation={16} className={classes.paper}>
                <Typography variant="body1">What type of room is it?</Typography>
                <FormControl component="fieldset" style={{padding: "6px 20px"}}>
                    <RadioGroup
                        aria-label="gender"
                        defaultValue="singleroom"
                        name="radio-buttons-group"
                        onChange={handleRadio}
                    >
                        <FormControlLabel value="singleroom" control={<Radio />} label="Single Room" />
                        <FormControlLabel value="selfcontained" control={<Radio />} label="Self-Contained" />
                        <FormControlLabel value="flat" control={<Radio />} label="Flat" />
                        <FormControlLabel value="others" control={<Radio />} label="Others" />
                    </RadioGroup>
                </FormControl>
                {others && (
                    <TrapFocus others getDoc>
                        <Box tabIndex={-1} className={classes.specifyothers}>
                            <label>
                                <InputBase placeholder=" Specify others " style={{border: "1px solid #D0D0D0"}} type="text"/>
                            </label>
                        </Box>
                    </TrapFocus>
                )}
            </Paper>
            <Paper variant="outlined" square elevation={16} className={classes.paper}>
                <Typography variant="body1">How many tenant per room is permitted?</Typography>
                <Box className={classes.sign}>
                    <div className={classes.add} style={{marginRight: "10px"}}>-</div>
                    1
                    <div className={classes.add} style={{marginLeft: "10px"}}>+</div>
                </Box>
                <Typography variant="body1" style={{marginTop: "20px"}}>Number of Bathrooms and Toilets?</Typography>
                <Box className={classes.sign}>
                    <div className={classes.add} style={{marginRight: "10px"}}>-</div>
                    1
                    <div className={classes.add} style={{marginLeft: "10px"}}>+</div>
                </Box>
                <FormControl style={{width: "150px", marginTop: "10px"}}>
                    <InputLabel id="demo-simple-select-label">No of windows </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={window}
                            label="window"
                            onChange={(e)=>setWindow(e.target.value)}
                        >   
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                        </Select>
                </FormControl>
            </Paper>
            <Paper variant="outlined" square elevation={16} className={classes.paper}>
                <Typography variant="body1">How big is this room? (optional)</Typography>
                <FormControl component="fieldset" style={{padding: "6px 20px"}}>
                    <RadioGroup row aria-label="gender" defaultValue="squaremeter" name="row-radio-buttons-group">
                        <FormControlLabel value="squaremeter" control={<Radio size="small" />} label="square meter" />
                        <FormControlLabel value="squarefeet" control={<Radio size="small" />} label="square feet" />
                    </RadioGroup>
                </FormControl>
                <Box tabIndex={-1} className={classes.specifyothers}>
                    <label>
                        <InputBase type="number" placeholder=" Specify Area " style={{border: "1px solid #D0D0D0"}}/>
                    </label>
                </Box>
            </Paper>
        </Box>
    )
}

export default StepOne;