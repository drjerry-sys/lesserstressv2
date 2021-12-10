import React from 'react';
import useStyles from './style';
import { Typography, TextField, Button } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { Search } from "@material-ui/icons";

const Home = () => {
    
    const classes = useStyles();

    const ifeArea = [
        {area: 'Lagere'},
        {area: 'Asherifa'},
        {area: 'Mayfair'},
        {area: 'Damico'},
    ]

    return (
        <div className={classes.home}>
            <div className={classes.wrapper}>
                <div className={classes.homeColor}>
                    <div className={classes.heading}>
                        <Typography variant="h2" className={classes.mainHead}>Find your space</Typography>
                        <Typography variant="body1">Over 360 hostel spaces in IFE,<br />discover and reserve space today</Typography>
                    </div>
                    <div className={classes.search}>
                        <Autocomplete className={classes.autocomplete}
                            id="free-solo-demo"
                            freeSolo
                            options={ifeArea.map((option) => option.area)}
                            renderInput={(params) => <TextField variant="outlined" {...params} label="Which Area Would You Prefer?" />}
                        />
                        <Autocomplete  className={classes.autocomplete}
                            id="free-solo-demo"
                            options={ifeArea.map((option) => option.area)}
                            renderInput={
                                (params) => <TextField variant="outlined" {...params} label="Select Price Range" />}
                        />
                        <Button variant="contained" size="large" startIcon={<Search />} className={classes.button}>Search</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;