import React from 'react';
import useStyles from './style';
import { Typography, TextField, Button, Grid, Card, CardContent, CardMedia, CssBaseline } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { Search } from "@material-ui/icons";
import priceImage from "../../../assets/illustrations/best_prices.png";
import searchHouse from "../../../assets/illustrations/search_house.png";
import roommate from "../../../assets/illustrations/roommate.png";

const Home = () => {
    
    const classes = useStyles();

    const ifeArea = [
        {area: 'Lagere'},
        {area: 'Asherifa'},
        {area: 'Mayfair'},
        {area: 'Damico'},
    ];

    const prices = [
        {priceRanges: "#50,000 - #100,000"},
        {priceRanges: "#100,000 - #150,000"},
        {priceRanges: "#150,000 - #200,000"},
        {priceRanges: "All"},
    ];
    
    return (
        <>
            <CssBaseline />
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
                                options={ifeArea.map((area) => area.area)}
                                renderInput={(params) => <TextField variant="outlined" {...params} label="Which Area Would You Prefer?" />}
                            />
                            <Autocomplete  className={classes.autocomplete}
                                id="free-solo-demo"
                                options={prices.map((price) => price.priceRanges)}
                                renderInput={
                                    (params) => <TextField variant="outlined" {...params} label="Select Price Range" />}
                            />
                            <Button variant="contained" size="large" startIcon={<Search />} className={classes.button}>Search</Button>
                        </div>
                    </div>
                    <div style={{ height: "5vh"}} />
                    <div style={{ padding: "20px 30px" }}>
                        <Grid container>
                            <Grid item xs={12} sm={12} md={4} lg={4}>
                                <Card style={{ boxShadow: "none", backgroundColor: "transparent"}}>
                                    <CardMedia component="img" image={searchHouse} className={classes.cardmedia} alt="best_prices" />
                                    <CardContent>
                                        <Typography variant="body1" style={{ fontWeight: 500, textAlign: "center"}}>
                                            Search for space
                                        </Typography>
                                        <Typography variant="subtitle1" style={{ textAlign: "center" }}>
                                            House deals at a discounted price.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={12} md={4} lg={4}>
                                <Card style={{ boxShadow: "none", backgroundColor: "transparent"}}>
                                    <CardMedia component="img" image={roommate} className={classes.cardmedia} alt="best_prices" />
                                    <CardContent>
                                        <Typography variant="body1" style={{ fontWeight: 500, textAlign: "center"}}>
                                            Roommate
                                        </Typography>
                                        <Typography variant="subtitle1" style={{ textAlign: "center" }}>
                                            Post a roomate request or Be someone's roomate
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={12} md={4} lg={4}>
                                <Card style={{ boxShadow: "none", backgroundColor: "transparent"}}>
                                    <CardMedia component="img" image={priceImage} className={classes.cardmedia} alt="best_prices" />
                                    <CardContent>
                                        <Typography variant="body1" style={{ fontWeight: 500, textAlign: "center"}}>
                                            Best Prices
                                        </Typography>
                                        <Typography variant="subtitle1" style={{ textAlign: "center" }}>
                                            House deals at a discounted price.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                        <Grid container className={classes.container}>
                            <Grid item xs={12} sm={12} md={8} lg={4} className={classes.gridItem}>
                                <Typography variant="body1"><h1 style={{ lineHeight: 0 }}>22,000+</h1> <br /> customers satisfied</Typography>
                            </Grid>
                            <Grid item xs={12} sm={12} md={8} lg={8} className={classes.gridItem}>

                                <div className={classes.inspection}>
                                    <div className={classes.roomTypes}>

                                    </div>
                                    <div style={{ width: "60%" }}>
                                        <Typography variant="subtitle1" style={{textAlign: "justify"}}>
                                            Book your Inspection experience today!
                                            Schedule an Inspection, meet an Agent, or ask for more information.
                                            Join the over 22,000 satisfied customer today!
                                        </Typography>
                                    </div>
                                    <Button variant="contained" className={classes.tour}>Schedule Inspection</Button>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;