import React from 'react';
import useStyles from './style';
import { Typography } from "@material-ui/core";

const Home = () => {
    
    const classes = useStyles();

    return (
        <div className={classes.home}>
            <div className={classes.wrapper}>
                <div className={classes.homeColor}>
                    <div className={classes.heading}>
                        <Typography variant="h2" className={classes.mainHead}>Find your space</Typography>
                        <Typography variant="body1">Over 360 hostel spaces in IFE,<br />discover and reserve space today</Typography>
                    </div>
                    <div className={classes.search}>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;