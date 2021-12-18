import React, { useState } from "react";
import TrapFocus from "@material-ui/core/Unstable_TrapFocus";
import { Box, Divider, FormControl, FormControlLabel, InputBase, Paper, Radio, RadioGroup, Typography } from '@material-ui/core';
import useStyles from "./style";

const StepFour = () => {

    const classes = useStyles();
    const [discount, setDiscount] = useState(false)

    return (
        <Box className={classes.stepfour}>
            <Typography variant="h5" pt={2} style={{ fontSize: "25px", paddingTop: "10px"}}>Price per year</Typography>
            <Paper variant="outlined" square elevation={16} className={classes.paper}>
                <Typography variant="h5" style={{ fontSize: "15px"}}>How much do you want to charge per year?</Typography>
                <Typography variant="body2" style={{ fontSize: "13px", fontWeight: "500", marginTop: "20px"}}>Tenant price in Naira (₦)</Typography>
                <InputBase placeholder="price here" type="number" style={{border: "1px solid #D0D0D0"}} fullWidth/>
                <Typography variant="body2" style={{ fontSize: "12px", fontWeight: "200",}}>Including agent fee and other miscelleneous</Typography>
                <Typography variant="body2" style={{ fontSize: "13px", fontWeight: "500", marginTop: "20px"}}>Want to give discount?</Typography>
                <FormControl component="fieldset">
                    <RadioGroup row aria-label="gender" defaultValue={false} onChange={(e)=>setDiscount(e.target.value)} name="row-radio-buttons-group">
                        <FormControlLabel value={true} control={<Radio size="small" />} label={<Typography variant="body2">Yes</Typography>} />
                        <FormControlLabel value={false} control={<Radio size="small" />} label={<Typography variant="body2">No</Typography>} />
                    </RadioGroup>
                </FormControl>
                {discount && (
                    <TrapFocus discount getDoc>
                        <Box tabIndex={-1} className={classes.specifyothers}>
                            <label>
                                <Typography variant="body2" style={{textAlign: "left",}}>How much percentage</Typography>
                                <InputBase placeholder="percent" type="number" style={{border: "1px solid #D0D0D0"}}/>
                            </label>
                        </Box>
                    </TrapFocus>
                )}
                <Divider className={classes.divider} />
                <Typography variant="h5" style={{ fontSize: "15px", fontWeight: "500", }}>How much do you want to charge for inspection?</Typography>
                <InputBase placeholder="price here" type="number" style={{border: "1px solid #D0D0D0", marginTop: "10px"}} fullWidth/>
                <Typography variant="body2" style={{ fontSize: "13px", fontWeight: "500", marginTop: "5px"}}>In Naira (₦)</Typography>
            </Paper>
        </Box>
    )
}

export default StepFour;