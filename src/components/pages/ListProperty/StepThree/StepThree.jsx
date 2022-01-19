import React, { useState } from 'react';
import useStyles from "./style";
import TrapFocus from "@material-ui/core/Unstable_TrapFocus";
import { Box, Switch, Paper, useMediaQuery, Typography, Divider, FormControl, RadioGroup, FormControlLabel, Radio, InputBase } from "@material-ui/core";

const StepThree = ({ formData, setFormData }) => {

    const classes = useStyles();
    const [radio, setRadio] = useState('no');
    const isMobile = useMediaQuery("(max-width:900px)")

    const handleChange = (e) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        })
    };

    const handleSwitches = (e) => {
        setFormData({
            ...formData, [e.target.name]: e.target.checked
        })
    }

    return (
        <Box>
            <Typography
                variant="h4"
                style={{ fontSize: "25px", fontWeight: "500"}}>
                    House Rules
            </Typography>
            <Paper variant="outlined" square elevation={16} className={classes.paper}>
                <Typography variant="body1">What type of room is it?</Typography>
                <div className={classes.switch}>
                    <Typography variant="body2" style={{textAlign: "left"}}>Smoking Allowed?</Typography>
                    <Switch
                        checked={formData.smoking}
                        onChange={handleSwitches}
                        name="smoking"
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                </div>
                <div className={classes.switch}>
                    <Typography variant="body2" style={{textAlign: "left"}}>Animals Allowed?</Typography>
                    <Switch
                        checked={formData.animals}
                        onChange={handleSwitches}
                        name="animals"
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                </div>
                <div className={classes.switch}>
                    <Typography variant="body2" style={{textAlign: "left"}}>Children Allowed?</Typography>
                    <Switch
                        checked={formData.children}
                        onChange={handleSwitches}
                        name="children"
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                </div>
                <div className={classes.switch}>
                    <Typography variant="body2" style={{textAlign: "left"}}>Parties/Events Allowed?</Typography>
                    <Switch
                        checked={formData.partying}
                        onChange={handleSwitches}
                        name="partying"
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                </div>
                <Divider className={classes.divider} />
                <div>
                    <Typography variant="body2" style={{textAlign: "left", }}>Do you have any specific time tenants must be at their rooms?</Typography>
                    <FormControl component="fieldset" style={{padding: "6px 20px"}}>
                        <RadioGroup
                            aria-label="gender"
                            value={radio}
                            name="radio-buttons-group"
                            onChange={(e)=>setRadio(e.target.value)}
                        >
                            <FormControlLabel value="yes" control={<Radio size="small" />} label="Yes" />
                            {radio === 'yes' && (
                                <TrapFocus checkout getDoc>
                                    <Box tabIndex={-1} className={classes.specifyothers}>
                                        <label>
                                            <Typography variant="body2" style={{textAlign: "left",}}>Evening:</Typography>
                                            <InputBase placeholder="check-in time" type="time" name="check_in" style={{border: "1px solid #D0D0D0"}} onChange={handleChange} />
                                            <Typography variant="body2" style={{textAlign: "left", marginTop: "5px"}}>Morning:</Typography>
                                            <InputBase placeholder="check-out time" type="time" name="check_out" style={{border: "1px solid #D0D0D0"}} onChange={handleChange} />
                                        </label>
                                    </Box>
                                </TrapFocus>
                            )}
                            <FormControlLabel value="no" control={<Radio size="small" />} label="No" />
                        </RadioGroup>
                    </FormControl>
                    <Divider className={classes.divider} />
                    <Typography variant="body2" style={{textAlign: "left", }}>Extra Rules?</Typography>
                    <div style={{paddingLeft: "20px"}}>
                        <Typography variant="body2" style={{textAlign: "left", marginBottom: "10px", fontSize: "10px"}}>use <mark style={{padding: "0 5px"}}>windows + .</mark> for emoji</Typography>
                        <textarea name="extraRules" rows="10" cols={isMobile ? "30" : "50"} placeholder="write them here"></textarea>
                    </div>
                    <Typography variant="body2" style={{textAlign: "left", marginTop: "10px" }}>What can you say about the House as Agent?</Typography>
                    <div style={{paddingLeft: "20px"}}>
                        <textarea name="agentComment" rows="10" cols={isMobile ? "30" : "50"} style={{ marginBottom: "10px"}} placeholder="write them here"></textarea>
                    </div>
                </div>
            </Paper>
        </Box>
    )
}

export default StepThree;