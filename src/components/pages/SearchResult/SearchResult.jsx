import useStyles from "./style";
import Footer from "../../Footer/Footer";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import image from "../../../assets/images/bgpic2.jpeg";
import { CheckCircle, Search, ThumbUp } from "@material-ui/icons";
import { Autocomplete, Pagination, Rating } from "@material-ui/lab";
import { getStreamedSpaces } from "../../../Redux/actions";
import { useSelector } from 'react-redux';
import { Box, Container, Chip, Typography, useMediaQuery, InputBase, Button, TextField } from "@material-ui/core";

const SearchResult = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const {area, price_range} = useParams();
    const isMobile = useMediaQuery('(max-width: 900px)');
    const { search_results } = useSelector(state=>state.space)

    const ifeArea = [
        {area: 'Lagere'},
        {area: 'Asherifa'},
        {area: 'Mayfair'},
        {area: 'Damico'},
    ];

    const prices = [
        {priceRanges: "#10,000 - #50,000"},
        {priceRanges: "#50,000 - #100,000"},
        {priceRanges: "#100,000 - #150,000"},
        {priceRanges: "#150,000 - #200,000"},
        {priceRanges: "#200,000 - #400,000"},
        {priceRanges: "All"},
    ];

    useEffect(()=>{
        dispatch(getStreamedSpaces(area, price_range))
    },[])

    return(
        <div className={classes.search}>
            <Box className={classes.section1}>
                <div className={classes.yourSearch}>
                    <Typography variant="" gutterBottom className={classes.heading}>
                        your search results
                    </Typography>
                    <Typography variant="subtitle1">
                        143 properties found in Asherifa
                    </Typography>
                </div>
            </Box>
            {isMobile && (
                <div className={classes.search2}>
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
                    <Button variant="contained" size="large" startIcon={<Search />} className={classes.button2}>Search</Button>
                </div>            
            )}
            <Container className={classes.section2}>
                {!isMobile && (
                    <div className={classes.left}>
                        <div className={classes.resultSearch}>
                            <Typography variant="h5">Search</Typography>
                            <div className={classes.area}>
                                <Typography variant="caption">Area</Typography>
                                <InputBase placeholder="Asherifa" className={classes.input} />
                            </div>
                            <div className={classes.area}>
                                <Typography variant="caption">Price Range</Typography>
                                <InputBase placeholder="Price" className={classes.input} />
                            </div>
                            <Button startIcon={<Search />} variant="contained" color="primary" className={classes.button}>search</Button>
                        </div>
                        <div className={classes.showOnMap}>

                        </div>
                    </div>
                )}
                <div className={classes.right}>
                    {search_results?.map((result)=>(
                        <Box className={classes.displayBox}>
                            <div className={classes.displayImg}>
                                <img src={image} alt="roomImg" style={{width: "100%"}}/>
                            </div>
                            <div className={classes.detailSection}>
                                <div className={classes.infoDetails}>
                                    <div className={classes.title}>
                                        <Typography variant="h5">
                                            {/* {result} */}
                                        </Typography>
                                        <Rating name="read-only" className={classes.rating} value={3} readOnly />
                                        <ThumbUp />
                                        <Typography variant="subtitle2">
                                            <Link to="">Ikeja</Link> . 
                                            <Link to="">show on map</Link> . 
                                            2.2km from campus, 20mins walk from campus
                                        </Typography>
                                    </div>
                                    <div className={classes.goodreviews}>
                                        <Typography variant="body1">
                                            Good
                                        </Typography>
                                        <Typography variant="caption">
                                            360 reviews
                                        </Typography><br />
                                        <Typography variant="caption">
                                            scale of 10 <Chip label="7.0" className={classes.chip} size="small" color="primary" />
                                        </Typography>
                                    </div>
                                </div>
                                <div className={classes.priceFeatures}>
                                    <div>
                                        <Typography gutterBottom className={classes.features} variant="subtitle1">
                                            <em>Features</em>
                                        </Typography>
                                        <div className={classes.roomFeatures}>
                                            <div className={classes.properties}>
                                                <CheckCircle className={classes.icon} />
                                                <Typography variant="caption">Single Room</Typography>
                                            </div>
                                            <div className={classes.properties}>
                                                <CheckCircle className={classes.icon} />
                                                <Typography variant="caption">Water</Typography>
                                            </div>
                                            <div className={classes.properties}>
                                                <CheckCircle className={classes.icon} />
                                                <Typography variant="caption">Light</Typography>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <Typography variant="h5">₦60,000</Typography>
                                    </div>
                                </div>
                            </div>
                        </Box>
                    ))}
                    {!search_results.length && (
                        <h1>No Space Found</h1>
                    )}
                {(search_results.length/10) && (
                    <Pagination className={classes.pagination} count={search_results.length/10} />
                )}
                </div>
            </Container>
            <Footer />
        </div>
    )
};

export default SearchResult