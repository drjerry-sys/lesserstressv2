import React, { useState, useEffect } from 'react';
import useStyles from "./style";
import { useSelector } from 'react-redux';
import TrapFocus from "@material-ui/core/Unstable_TrapFocus";
import { Box, RadioGroup, Radio, FormControl, Paper, Typography, FormControlLabel, InputBase, MenuItem, Select, InputLabel, TextField } from '@material-ui/core';

const StepOne = ({ formData, setFormData, setCompound, compound}) => {

    const areas = [{area: 'Damico', id: 0}, {area: 'Lagere', id: 1}, {area: 'Asherifa', id: 2}, {area: 'Mayfair', id: 3}, {area: 'Parakin', id: 30}, ]
    const myCompounds = [{comp: 'select compound', id: 0.1}, {comp: 'Baba Lasisi Compound', id: 0}, {comp: 'God\'s Favour Compound', id: 1}, {comp: 'His Mercy, Dugbe', id: 2}]

    const classes = useStyles();
    const [others, setOthers] = useState(false);
    const { errMessage } = useSelector(state=>state.space);
    const { comp_name: compNameErr } = errMessage;
    
    // useEffect(()=>{

    // }, [])

    useEffect(()=>{
        if (compound === 'no') setFormData({...formData, compoundId: 0.1})
    }, [compound])

    const handleDecrement = (status) => {
        let tenant = formData.noOfTenantPermitted, bath = formData.noOfRoomsPerBath, toilet = formData.noOfRoomsPerToilet;
        let windows = formData.noOfWindows
        if (status === 'noOfTenantPermitted') {
            setFormData({ ...formData, noOfTenantPermitted: tenant === 1 ? 1 : tenant - 1})
        } else if (status === 'bath') {
            setFormData({ ...formData, noOfRoomsPerBath: bath === 1 ? 1 : bath - 1})
        } else if (status === 'toilet') {
            setFormData({ ...formData, noOfRoomsPerToilet: toilet === 1 ? 1 : toilet - 1})
        } else if (status === 'windows') {
            setFormData({ ...formData, noOfWindows: !windows ? 0 : windows - 1})
        };
    };

    const handleIncrement = (status) => {
        if (status === 'noOfTenantPermitted') {
            setFormData({ ...formData, noOfTenantPermitted: formData.noOfTenantPermitted + 1})
        } else if (status === 'bath') {
            setFormData({ ...formData, noOfRoomsPerBath: formData.noOfRoomsPerBath + 1})
        } else if (status === 'toilet') {
            setFormData({ ...formData, noOfRoomsPerToilet: formData.noOfRoomsPerToilet + 1})
        } else if (status === 'windows') {
            setFormData({ ...formData, noOfWindows: formData.noOfWindows + 1})
        };
    };

    const handleChange = (event, status) => {
        let val = event.target.value;
        if (status === 'area') {
            setFormData({...formData, areaLocated: val})
        } else if (status === 'compound') {
            setFormData({...formData, compoundId: val})
        } else if (status === 'compname') {
            setFormData({...formData, comp_name: val})
        } else if (status === 'others') {
            setFormData({...formData, roomType: val})
        } else if (status === 'unit') {
            setFormData({ ...formData, roomAreaUnit: val})
        } else if (status === 'areavalue') {
            setFormData({ ...formData, roomArea: val})
        }
    }

    const handleRoomRadio = (event) => {
        let val = event.target.value;
        if (val === "others") {
            setOthers(true)
        } else {
            setFormData({...formData, roomType: val})
            setOthers(false)
        };
    };

    const handleCompRadio = (event) => {
        setFormData({...formData, comp_type: event.target.value})
    };


    return (
        <Box className={classes.propertyDetails}>
            <Typography variant="h4" style={{ fontSize: "25px", fontWeight: "500"}}>Property Details</Typography>
            <Paper variant="outlined" square elevation={16} className={classes.paper}>
                <Typography variant="body1">Do you have a room in this compound already?</Typography>
                <FormControl component="fieldset">
                    <RadioGroup row aria-label="gender" defaultValue={'yes'} name="row-radio-buttons-group" onChange={(e)=>setCompound(e.target.value)}>
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>
                {compound === "yes" ? (
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Select compound</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={formData.compoundId}
                            style={{marginBottom: "15px"}}
                            onChange={(e)=>handleChange(e, 'compound')}
                        >
                            {myCompounds.map((comp)=> (
                                <MenuItem key={comp.id} value={comp.id}>{comp.comp}</MenuItem>
                            ))};
                        </Select>
                    </FormControl>
                ) : compound === "no" ? (
                    <>
                        <TextField style={{marginBottom: "10px"}} id="outlined-basic" value={formData.comp_name} onChange={(e)=>handleChange(e, 'compname')} fullWidth label="Name of compound" variant="outlined" />
                        <Typography variant="caption" color="secondary" style={{textAlign: "center"}}>{compNameErr[0]}</Typography>
                    </>
                ) : null}
                <Typography variant="body1">What type of Compound is it?</Typography>
                <FormControl component="fieldset" style={{padding: "6px 20px"}}>
                    <RadioGroup
                        aria-label="gender"
                        defaultValue={formData.comp_type}
                        name="radio-buttons-group"
                        onChange={handleCompRadio}
                    >
                        <FormControlLabel value="Duplex" control={<Radio />} label="Duplex" />
                        <FormControlLabel value="Tenement" control={<Radio />} label="Tenement(Face-to-face)" />
                        <FormControlLabel value="Flat" control={<Radio />} label="Flat" />
                        <FormControlLabel value="Storey building" control={<Radio />} label="Storey building" />
                        <FormControlLabel value="Bungalow" control={<Radio />} label="Bungalow" />
                        <FormControlLabel value="Detached" control={<Radio />} label="Detached" />
                    </RadioGroup>
                </FormControl>
                <Typography variant="body1">What type of room is it?</Typography>
                <FormControl component="fieldset" style={{padding: "6px 20px"}}>
                    <RadioGroup
                        aria-label="gender"
                        defaultValue={formData.roomType}
                        name="radio-buttons-group"
                        onChange={handleRoomRadio}
                    >
                        <FormControlLabel value="single room" control={<Radio />} label="Single Room" />
                        <FormControlLabel value="self-contained" control={<Radio />} label="Self-Contained" />
                        <FormControlLabel value="boys quarter" control={<Radio />} label="Boys quarter" />
                        <FormControlLabel value="others" control={<Radio />} label="Others" />
                    </RadioGroup>
                </FormControl>
                {others && (
                    <TrapFocus others getDoc>
                        <Box tabIndex={-1} className={classes.specifyothers}>
                            <label>
                                <InputBase placeholder=" Specify others " onChange={(e)=>handleChange(e, 'others')} style={{border: "1px solid #D0D0D0"}} type="text"/>
                            </label>
                        </Box>
                    </TrapFocus>
                )}
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Select Area</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={formData.areaLocated}
                        onChange={(e)=>handleChange(e, 'area')}
                        style={{marginBottom: "15px"}}
                    >
                        {areas.map((area)=>(
                            <MenuItem value={area.area}>{area.area}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Paper>
            <Paper variant="outlined" square elevation={16} className={classes.paper}>
                <Typography variant="body1">How many tenant per room is permitted?</Typography>
                <Box className={classes.sign}>
                    <div className={classes.add} style={{marginRight: "10px", cursor: 'pointer'}} onClick={()=>handleDecrement('noOfTenantPermitted')}>-</div>
                    {formData.noOfTenantPermitted}
                    <div className={classes.add} style={{marginLeft: "10px", cursor: 'pointer'}} onClick={()=>handleIncrement('noOfTenantPermitted')}>+</div>
                </Box>
                <Typography variant="body1" style={{marginTop: "20px"}}>Number of rooms per Bathroom</Typography>
                <Box className={classes.sign}>
                    <div className={classes.add} style={{marginRight: "10px", cursor: 'pointer'}} onClick={()=>handleDecrement('bath')}>-</div>
                    {formData.noOfRoomsPerBath}
                    <div className={classes.add} style={{marginLeft: "10px", cursor: 'pointer'}} onClick={()=>handleIncrement('bath')}>+</div>
                </Box>
                <Typography variant="body1" style={{marginTop: "20px"}}>Number of rooms per Toilet</Typography>
                <Box className={classes.sign}>
                    <div className={classes.add} style={{marginRight: "10px", cursor: 'pointer'}} onClick={()=>handleDecrement('toilet')}>-</div>
                    {formData.noOfRoomsPerToilet}
                    <div className={classes.add} style={{marginLeft: "10px", cursor: 'pointer'}} onClick={()=>handleIncrement('toilet')}>+</div>
                </Box>
            </Paper>
            <Paper variant="outlined" square elevation={16} className={classes.paper}>
                <Typography variant="body1" style={{marginTop: "5px"}}>No of windows </Typography>
                <Box className={classes.sign} mb={3}>
                    <div className={classes.add} style={{marginRight: "10px", cursor: 'pointer'}} onClick={()=>handleDecrement('windows')}>-</div>
                    {formData.noOfWindows}
                    <div className={classes.add} style={{marginLeft: "10px", cursor: 'pointer'}} onClick={()=>handleIncrement('windows')}>+</div>
                </Box>
                <Typography variant="body1">How big is this room? (optional)</Typography>
                <FormControl component="fieldset" style={{padding: "6px 20px"}}>
                    <RadioGroup row aria-label="gender" onChange={(e)=>handleChange(e, 'unit')} value={formData.roomAreaUnit} name="row-radio-buttons-group">
                        <FormControlLabel value="sqr meter" control={<Radio size="small" />} label="square meter" />
                        <FormControlLabel value="sqr feet" control={<Radio size="small" />} label="square feet" />
                    </RadioGroup>
                </FormControl>
                <Box tabIndex={-1} className={classes.specifyothers}>
                    <label>
                        <InputBase type="number" placeholder=" Specify Area " onChange={(e)=>handleChange(e, 'areavalue')} style={{border: "1px solid #D0D0D0"}}/>
                    </label>
                </Box>
            </Paper>
            <Paper variant="outlined" square elevation={16} className={classes.paper}>
                <Typography variant="body1">Select location on map</Typography>
            </Paper>
        </Box>
    )
}

export default StepOne;