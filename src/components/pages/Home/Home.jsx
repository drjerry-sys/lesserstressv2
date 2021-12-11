import React from 'react';
import useStyles from './style';
import { Typography, TextField, Button, Grid, Card, CardContent, CardMedia, CssBaseline, Chip } from "@material-ui/core";
import { Autocomplete, Rating } from "@material-ui/lab";
import { CheckCircle, Search } from "@material-ui/icons";
import priceImage from "../../../assets/illustrations/best_prices.png";
import searchHouse from "../../../assets/illustrations/search_house.png";
import roommate from "../../../assets/illustrations/roommate.png";
import asherifa from "../../../assets/images/for_rent_4.jfif"

const Home = () => {
    
    const classes = useStyles();
    const isAuthenticated = true;

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
                    <div className={classes.overall}>
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
                                <Typography variant="h2" style={{ fontWeight: 500 }}>22,000+</Typography>
                                <Typography variant="subtitle1" style={{ fontSize: 20 }}>customers satisfied</Typography>
                            </Grid>
                            <Grid item xs={12} sm={12} md={8} lg={8} className={classes.gridItem}>

                                <div className={classes.inspection}>
                                    <div className={classes.roomTypes}>
                                        <Typography variant="h4">
                                            Hi, {isAuthenticated ? "Jerry" : "there"}!
                                        </Typography>
                                    </div>
                                    <div className={classes.roomContent}>
                                        <Typography variant="subtitle1" style={{textAlign: "justify"}}>
                                            Book your Inspection experience today!
                                            Schedule an Inspection, meet an Agent, or ask for more information and
                                            Join the over 22,000 satisfied customer!
                                        </Typography>
                                    </div>
                                    <Button variant="contained" className={classes.tour}>Schedule Inspection</Button>
                                </div>
                            </Grid>
                        </Grid>
                        <div classNmae={classes.topAreas}>
                            <Typography gutterBottom variant="h4" className={classes.areaText}>Student Areas</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12} md={6} lg={3}>
                                    <div className={classes.areaImg}>
                                        <Typography variant="body1" className={classes.areaName}>Asherifa</Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} lg={3}>
                                    <div className={classes.areaImg}>
                                        <Typography variant="body1" className={classes.areaName}>Mayfair</Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} lg={3}>
                                    <div className={classes.areaImg}>
                                        <Typography variant="body1" className={classes.areaName}>Lagere</Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} lg={3}>
                                    <div className={classes.areaImg}>
                                        <Typography variant="body1" className={classes.areaName}>Damico</Typography>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                        <div className={classes.trending}>
                            <Typography gutterBottom style={{ marginTop: 60 }} variant="h4" className={classes.areaText}>Trending Spaces</Typography>
                            <Grid container spacing={3}>
                                <Grid item md={6} lg={4}>
                                    <Card>
                                        <CardMedia component="img" image={asherifa} className={classes.contentMedia} />
                                        <CardContent>
                                            <div>
                                                <Typography gutterBottom variant="subtitle1">Single Room</Typography>
                                                <div className={classes.ratingdiv}>
                                                    <Rating name="read-only" className={classes.rating} value={3} readOnly />
                                                    <Chip label="3.0" className={classes.ratingChip} size="small" />
                                                </div>
                                                <div className={classes.properties}>
                                                    <CheckCircle className={classes.icon} />
                                                    <Typography variant="caption">Asherifa, Along Ibadan-Ondo Express Way</Typography>
                                                </div>
                                                <div className={classes.properties}>
                                                    <CheckCircle className={classes.icon} />
                                                    <Typography variant="caption">10 mins walk (to campus gate)</Typography>
                                                </div>
                                                <div className={classes.properties}>
                                                    <CheckCircle className={classes.icon} />
                                                    <Typography variant="caption">Behind Cedar church, transformer side</Typography>
                                                </div>
                                                <div className={classes.bottomContent}>
                                                    <div>
                                                        <Typography variant="body1" className={classes.period}>yearly</Typography>
                                                        <Typography variant="h2" className={classes.price}>#100,000</Typography>
                                                    </div>
                                                    <div>
                                                        <Typography variant="body1" className={classes.period}>people</Typography>
                                                        <Typography variant="h2" className={classes.price}>1-3</Typography>
                                                    </div>
                                                    <div>
                                                        <Typography variant="body1" className={classes.period}>size</Typography>
                                                        <Typography variant="h2" className={classes.price}>13ft x 20ft</Typography>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item md={6} lg={4}>
                                    <Card>
                                        <CardMedia component="img" image={asherifa}  className={classes.contentMedia} />
                                        <CardContent>
                                            <div>
                                                <Typography gutterBottom variant="subtitle1">Single Room</Typography>
                                                <div className={classes.ratingdiv}>
                                                    <Rating name="read-only" className={classes.rating} value={3} readOnly />
                                                    <Chip label="3.0" className={classes.ratingChip} size="small" />
                                                </div>
                                                <div className={classes.properties}>
                                                    <CheckCircle className={classes.icon} />
                                                    <Typography variant="caption">Asherifa, Along Ibadan-Ondo Express Way</Typography>
                                                </div>
                                                <div className={classes.properties}>
                                                    <CheckCircle className={classes.icon} />
                                                    <Typography variant="caption">10 mins walk (to campus gate)</Typography>
                                                </div>
                                                <div className={classes.properties}>
                                                    <CheckCircle className={classes.icon} />
                                                    <Typography variant="caption">Behind Cedar church, transformer side</Typography>
                                                </div>
                                                <div className={classes.bottomContent}>
                                                    <div>
                                                        <Typography variant="body1" className={classes.period}>yearly</Typography>
                                                        <Typography variant="h2" className={classes.price}>#100,000</Typography>
                                                    </div>
                                                    <div>
                                                        <Typography variant="body1" className={classes.period}>people</Typography>
                                                        <Typography variant="h2" className={classes.price}>1-3</Typography>
                                                    </div>
                                                    <div>
                                                        <Typography variant="body1" className={classes.period}>size</Typography>
                                                        <Typography variant="h2" className={classes.price}>13ft x 20ft</Typography>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item md={6} lg={4}>
                                    <Card>
                                        <CardMedia component="img" image={asherifa} className={classes.contentMedia} />
                                        <CardContent>
                                            <div>
                                                <Typography gutterBottom variant="subtitle1">Single Room</Typography>
                                                <div className={classes.ratingdiv}>
                                                    <Rating name="read-only" className={classes.rating} value={3} readOnly />
                                                    <Chip label="3.0" className={classes.ratingChip} size="small" />
                                                </div>
                                                <div className={classes.properties}>
                                                    <CheckCircle className={classes.icon} />
                                                    <Typography variant="caption">Asherifa, Along Ibadan-Ondo Express Way</Typography>
                                                </div>
                                                <div className={classes.properties}>
                                                    <CheckCircle className={classes.icon} />
                                                    <Typography variant="caption">10 mins walk (to campus gate)</Typography>
                                                </div>
                                                <div className={classes.properties}>
                                                    <CheckCircle className={classes.icon} />
                                                    <Typography variant="caption">Behind Cedar church, transformer side</Typography>
                                                </div>
                                                <div className={classes.bottomContent}>
                                                    <div>
                                                        <Typography variant="body1" className={classes.period}>yearly</Typography>
                                                        <Typography variant="h2" className={classes.price}>#100,000</Typography>
                                                    </div>
                                                    <div>
                                                        <Typography variant="body1" className={classes.period}>people</Typography>
                                                        <Typography variant="h2" className={classes.price}>1-3</Typography>
                                                    </div>
                                                    <div>
                                                        <Typography variant="body1" className={classes.period}>size</Typography>
                                                        <Typography variant="h2" className={classes.price}>13ft x 20ft</Typography>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                            <div className={classes.bottomDiv}>
                                <Button variant="contained" className={classes.browseAll}>Browse All</Button>
                                <Typography variant="caption" style={{ textAlign: "center"}}>365 spaces in 12 Areas in Ife</Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;