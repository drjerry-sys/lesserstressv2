import useStyles from './style';
import React, { useEffect, useState } from 'react';
import Footer from "../../Footer/Footer";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { getHomeRooms } from '../../../Redux/actions';
import { Autocomplete, Rating } from "@material-ui/lab";
import asherifa from "../../../assets/images/for_rent_4.jfif";
import roommate from "../../../assets/illustrations/roommate.png";
import priceImage from "../../../assets/illustrations/best_prices.png";
import searchHouse from "../../../assets/illustrations/search_house.png";
import { CheckCircle, Search, PersonPinCircle, Schedule, Home as HomeIcon } from "@material-ui/icons";
import { Typography, TextField, Button, Grid, Card, CardContent, CardMedia, Chip, Box } from "@material-ui/core";

const Home = ({ isLoggedIn: isAuthenticated, homeData }) => {
    
    const classes = useStyles();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [searchInpt, setsearchInpt] = useState({area: "", price_range: ""});

    const spaceType = [
        {space: 'Flat'},
        {space: 'Duplex'},
        {space: 'Single Room'},
        {space: 'Self-contained'},
        {space: 'others'},
    ];

    const prices = [
        {priceRanges: "₦50,000 - ₦100,000"},
        {priceRanges: "₦100,000 - ₦150,000"},
        {priceRanges: "₦150,000 - ₦200,000"},
        {priceRanges: "₦200,000 - ₦400,000"},
        {priceRanges: "above 400,000"},
    ];
    
    useEffect(()=>{
        dispatch(getHomeRooms())
        console.log("Rerending gethomes")
    }, []);

    const handleSearch = () => {
        const {area, price_range} = searchInpt;
        if (area && price_range) {
            navigate(`/search_result/${area}/${price_range}`);
        }
    };

    const handleAreas = (e, area) => {
        navigate('')
    }

    const handleRoom = () => {
        navigate("/single_room");
    };

    const handleSpace = () => {
        navigate("/list_property");
    };
    
    return (
        <div className={classes.home}>
            <div className={classes.wrapper}>
                <div className={classes.homeColor}>
                    <div className={classes.heading}>
                        <Typography variant="h2" className={classes.mainHead}>Find your space</Typography>
                        <Typography variant="body1">Over {homeData?.freeSpace} hostel spaces in IFE,<br />discover and reserve space today</Typography>
                    </div>
                    <div className={classes.search}>
                        <Autocomplete className={classes.autocomplete}
                            id="free-solo-demo"
                            options={spaceType.map((space) => space.space)}
                            
                            freeSolo={true}
                            renderInput={(params) => <TextField 
                                variant="outlined" 
                                onChange={(e, v)=>setsearchInpt({...searchInpt, area: e.target.value})} 
                                // onChange={(e, v)=>alert(e.target.value)} 
                                required {...params} label="Try 'Lagere' or 'self contained'" />}
                        />
                        <Autocomplete  className={classes.autocomplete}
                            id="free-solo-demo"
                            options={prices.map((price) => price.priceRanges)}
                            onChange={(e, v)=>setsearchInpt({...searchInpt, price_range: v})}
                            renderInput={
                                (params) => <TextField variant="outlined" required {...params} label="Select Price Range" />}
                        />
                        <Button variant="contained" size="large" startIcon={<Search />} onClick={handleSearch} className={classes.button}>Search</Button>
                    </div>
                </div>
            </div>
            <div className={classes.overall}>
                <div style={{ height: "5vh"}} />
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
                    <div className={classes.container}>
                        <Grid container>
                            <Grid item xs={12} sm={12} md={4} lg={4} className={classes.gridItem}>
                                <Typography variant="h2" style={{ fontWeight: 500 }}>{homeData?.user_satisfied}+</Typography>
                                <Typography variant="subtitle1" style={{ fontSize: 20 }}>customers satisfied</Typography>
                            </Grid>
                            <Grid item xs={12} sm={12} md={8} lg={8} className={classes.gridItem}>

                                <div className={classes.inspection}>
                                    <div className={classes.roomTypes}>
                                        <Typography variant="h4">
                                            Hi, {isAuthenticated ? homeData?.myName : "there"}!
                                        </Typography>
                                    </div>
                                    <div className={classes.roomContent}>
                                        <Typography variant="subtitle1" style={{textAlign: "justify"}}>
                                            Book your Inspection experience today!
                                            Schedule an Inspection, meet an Agent, or ask for more information and
                                            Join the over {homeData?.user_satisfied} satisfied customer!
                                        </Typography>
                                    </div>
                                    <Button variant="contained" className={classes.tour}>Schedule Inspection</Button>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                    <div classNmae={classes.topAreas}>
                        <Typography gutterBottom variant="h4" className={classes.areaText}>Student Areas</Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12} md={6} lg={3}>
                                <div className={classes.asherifaCard} onClick={(e)=>handleAreas(e, 'aherifa')}>
                                    <div className={classes.areaImg}>
                                        <Typography variant="body1" className={classes.areaName}>Asherifa</Typography>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={3}>
                                <div className={classes.mayfairCard} onClick={(e)=>handleAreas(e, 'mayfair')}>
                                    <div className={classes.areaImg}>
                                        <Typography variant="body1" className={classes.areaName}>Mayfair</Typography>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={3}>
                                <div className={classes.lagereCard} onClick={(e)=>handleAreas(e, 'lagere')}>
                                    <div className={classes.areaImg}>
                                        <Typography variant="body1" className={classes.areaName}>Lagere</Typography>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={3}>
                                <div className={classes.damicoCard} onClick={(e)=>handleAreas(e, 'damico')}>
                                    <div className={classes.areaImg}>
                                        <Typography variant="body1" className={classes.areaName}>Damico</Typography>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                    <div className={classes.trending}>
                    <Typography gutterBottom style={{ marginTop: 60 }} variant="h4" className={classes.areaText}>Trending Spaces</Typography>
                    <Grid container spacing={3}>
                    {homeData?.spaces?.map(({data, images})=>(
                        <Grid item xs={12} sm={12} md={4} lg={4}>
                            <Card>
                                <CardMedia component="img" image={images.length?images[0].image_url:asherifa} className={classes.contentMedia} />
                                <CardContent>
                                    <div onClick={handleRoom} style={{cursor: "pointer"}}>
                                        <Typography gutterBottom variant="subtitle1">{data?.roomType}</Typography>
                                        <div className={classes.ratingdiv}>
                                            <Rating name="read-only" className={classes.rating} value={3} readOnly />
                                            <Chip label="3.0" className={classes.ratingChip} size="small" />
                                        </div>
                                        <Box className={classes.properties}>
                                            <CheckCircle className={classes.icon} />
                                            <Typography variant="caption">Asherifa, Along Ibadan-Ondo Express Way</Typography>
                                        </Box>
                                        <Box className={classes.properties}>
                                            <CheckCircle className={classes.icon} />
                                            <Typography variant="caption">10 mins walk (to campus gate)</Typography>
                                        </Box>
                                        <Box className={classes.properties}>
                                            <CheckCircle className={classes.icon} />
                                            <Typography variant="caption">Behind Cedar church, transformer side</Typography>
                                        </Box>
                                        <Box className={classes.bottomContent}>
                                            <Box>
                                                <Typography variant="body1" className={classes.period}>yearly</Typography>
                                                <Typography variant="h2" className={classes.price}>₦{Number(data.room_yearlyPrice).toLocaleString()}</Typography>
                                            </Box>
                                            <Box>
                                                <Typography variant="body1" className={classes.period}>people</Typography>
                                                <Typography variant="h2" className={classes.price}>{data.noOfTenantPermitted}</Typography>
                                            </Box>
                                            <Box>
                                                <Typography variant="body1" className={classes.period}>size({data.roomAreaUnit})</Typography>
                                                <Typography variant="h2" className={classes.price}>{data.roomArea}</Typography>
                                            </Box>
                                        </Box>
                                    </div>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                        </Grid>
                        <div className={classes.bottomDiv}>
                            <Button variant="contained" className={classes.browseAll}>Browse All</Button>
                            <Typography variant="caption" style={{ textAlign: "center"}}>365 spaces in 12 Areas in Ife</Typography>
                        </div>
                    </div>
                </div>
                <Box  className={classes.secondWrapper}>
                    <div className={classes.howitworkswrapper}>
                        <Typography variant="h4" gutterbottom className={classes.howitworks}>
                            How it works?
                        </Typography>
                        <Typography variant="body1" className={classes.allyouneed}>
                            All you’ll need are the details of the building and location, the types of space, pricing and some good quality photographs.
                        </Typography>
                    </div>
                    <div className={classes.findSubmmitSpace}>
                        <Button variant="contained" className={classes.find}>Find your Space</Button>
                        <Button variant="Outlined" className={classes.submit} onClick={handleSpace}>Submit Space</Button>
                    </div>
                </Box>
                <Box className={classes.stepsection}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={12} md={4} lg={4}>
                            <div className={classes.chooseCard}>
                                <div className={classes.round}>
                                    <HomeIcon className={classes.homeIcon} />
                                </div>
                                <div className={classes.details}>
                                    <Typography variant="body1" className={classes.stepAction}>
                                        1.  Choose a Space
                                    </Typography>
                                    <Typography variant="body2" className={classes.stepDetail}>
                                        Take your time to select the most suitable apartment and room with the qualities you prefer.
                                    </Typography>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4}>
                            <div className={classes.chooseCard}>
                                <div className={classes.round}>
                                    <Schedule className={classes.homeIcon} />
                                </div>
                                <div className={classes.details}>
                                    <Typography variant="body1" className={classes.stepAction}>
                                        2.  Schedule an Inspection
                                    </Typography>
                                    <Typography variant="body2" className={classes.stepDetail}>
                                        Schedule an appointment with the agent and check out the space in real time.
                                    </Typography>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4}>
                            <div className={classes.chooseCard}>
                                <div className={classes.round}>
                                    <PersonPinCircle className={classes.homeIcon} />
                                </div>
                                <div className={classes.details}>
                                    <Typography variant="body1" className={classes.stepAction}>
                                        3.  Book your Space
                                    </Typography>
                                    <Typography variant="body2" className={classes.stepDetail}>
                                        Do the necessary paper work and payment for the space. Enjoy your space
                                    </Typography>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                    <div className={classes.findLocation}>
                        <Button variant="contained" className={classes.locationButton} mb={4}>Find a Location</Button>
                    </div>
                </Box>
            <Footer />
        </div>
    );
};

export default Home;