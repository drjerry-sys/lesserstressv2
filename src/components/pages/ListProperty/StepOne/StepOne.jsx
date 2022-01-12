import React, { useState } from 'react';
import useStyles from "./style";
import TrapFocus from "@material-ui/core/Unstable_TrapFocus";
import { Box, RadioGroup, Radio, FormControl, Paper, Typography, FormControlLabel, InputBase, MenuItem, Select, InputLabel, TextField } from '@material-ui/core';

const StepOne = () => {

    const areas = [{area: 'Damico', id: 0}, {area: 'Lagere', id: 1}, {area: 'Asherifa', id: 2}, {area: 'Mayfair', id: 3}, {area: 'Parakin', id: 30}, ]
    const myCompounds = [{comp: 'Baba Lasisi Compound', id: 0}, {comp: 'God\'s Favour Compound', id: 1}, {comp: 'His Mercy, Dugbe', id: 2}]

    const classes = useStyles();
    const [others, setOthers] = useState(false);
    const [compound, setCompound] = useState('yes');
    const [formData, setFormData] = useState({
        gender: '',
        compoundId: compound === 'yes' ? 0: 0.1,     //o.1 is the id for new compound
        roomType: 'single room',
        selectedArea: 'Damico',
        noOfWindows: 0,
        noOfTenant: 1,
        noOfRoomBath: 1,
        noOfRoomToilet: 1,
        compoundName: '',
        roomAreaUnit: 'sqr meter',
        roomArea: 0,
        latitude: 0,
        longitude: 0,
    });

    const handleDecrement = (status) => {
        let tenant = formData.noOfTenant, bath = formData.noOfRoomBath, toilet = formData.noOfRoomToilet;
        let windows = formData.noOfWindows
        if (status === 'noOfTenant') {
            setFormData({ ...formData, noOfTenant: tenant === 1 ? 1 : tenant - 1})
        } else if (status === 'bath') {
            setFormData({ ...formData, noOfRoomBath: bath === 1 ? 1 : bath - 1})
        } else if (status === 'toilet') {
            setFormData({ ...formData, noOfRoomToilet: toilet === 1 ? 1 : toilet - 1})
        } else if (status === 'windows') {
            setFormData({ ...formData, noOfWindows: !windows ? 0 : windows - 1})
        };
    };

    const handleIncrement = (status) => {
        if (status === 'noOfTenant') {
            setFormData({ ...formData, noOfTenant: formData.noOfTenant + 1})
        } else if (status === 'bath') {
            setFormData({ ...formData, noOfRoomBath: formData.noOfRoomBath + 1})
        } else if (status === 'toilet') {
            setFormData({ ...formData, noOfRoomToilet: formData.noOfRoomToilet + 1})
        } else if (status === 'windows') {
            setFormData({ ...formData, noOfWindows: formData.noOfWindows + 1})
        };
    };

    const handleChange = (event, status) => {
        let val = event.target.value;
        if (status === 'area') {
            setFormData({...formData, selectedArea: val})
        } else if (status === 'compound') {
            setFormData({...formData, compoundId: val})
        } else if (status === 'compname') {
            setFormData({...formData, compoundName: val})
        } else if (status === 'others') {
            setFormData({...formData, roomType: val})
        } else if (status === 'unit') {
            setFormData({ ...formData, roomAreaUnit: val})
        } else if (status === 'areavalue') {
            setFormData({ ...formData, roomArea: val})
        }
    }

    const handleRadio = (event) => {
        let val = event.target.value;
        if (val === "others") {
            setOthers(true)
        } else {
            setFormData({...formData, roomType: val})
            setOthers(false)
        };
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
                                <MenuItem value={comp.id}>{comp.comp}</MenuItem>
                            ))};
                        </Select>
                    </FormControl>
                ) : compound === "no" ? (
                    <TextField style={{marginBottom: "10px"}} id="outlined-basic" onChange={(e)=>handleChange(e, 'compname')} fullWidth label="Name of compound" variant="outlined" />
                ) : ""}
                <Typography variant="body1">What type of room is it?</Typography>
                <FormControl component="fieldset" style={{padding: "6px 20px"}}>
                    <RadioGroup
                        aria-label="gender"
                        defaultValue={formData.roomType}
                        name="radio-buttons-group"
                        onChange={handleRadio}
                    >
                        <FormControlLabel value="single room" control={<Radio />} label="Single Room" />
                        <FormControlLabel value="self-contained" control={<Radio />} label="Self-Contained" />
                        <FormControlLabel value="flat" control={<Radio />} label="Flat" />
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
                        value={formData.selectedArea}
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
                    <div className={classes.add} style={{marginRight: "10px", cursor: 'pointer'}} onClick={()=>handleDecrement('noOfTenant')}>-</div>
                    {formData.noOfTenant}
                    <div className={classes.add} style={{marginLeft: "10px", cursor: 'pointer'}} onClick={()=>handleIncrement('noOfTenant')}>+</div>
                </Box>
                <Typography variant="body1" style={{marginTop: "20px"}}>Number of rooms per Bathroom</Typography>
                <Box className={classes.sign}>
                    <div className={classes.add} style={{marginRight: "10px", cursor: 'pointer'}} onClick={()=>handleDecrement('bath')}>-</div>
                    {formData.noOfRoomBath}
                    <div className={classes.add} style={{marginLeft: "10px", cursor: 'pointer'}} onClick={()=>handleIncrement('bath')}>+</div>
                </Box>
                <Typography variant="body1" style={{marginTop: "20px"}}>Number of rooms per Toilet</Typography>
                <Box className={classes.sign}>
                    <div className={classes.add} style={{marginRight: "10px", cursor: 'pointer'}} onClick={()=>handleDecrement('toilet')}>-</div>
                    {formData.noOfRoomToilet}
                    <div className={classes.add} style={{marginLeft: "10px", cursor: 'pointer'}} onClick={()=>handleIncrement('toilet')}>+</div>
                </Box>
                <Typography variant="body1" style={{marginTop: "20px"}}>No of windows </Typography>
                <Box className={classes.sign}>
                    <div className={classes.add} style={{marginRight: "10px", cursor: 'pointer'}} onClick={()=>handleDecrement('windows')}>-</div>
                    {formData.noOfWindows}
                    <div className={classes.add} style={{marginLeft: "10px", cursor: 'pointer'}} onClick={()=>handleIncrement('windows')}>+</div>
                </Box>
                {/* <FormControl style={{width: "150px", marginTop: "10px"}}>
                    <InputLabel id="demo-simple-select-label"></InputLabel>
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
                </FormControl> */}
            </Paper>
            <Paper variant="outlined" square elevation={16} className={classes.paper}>
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