import useStyles from "./style";
import Footer from "../../Footer/Footer";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import image from "../../../assets/images/bgpic2.jpeg";
import { CheckCircle, Search, ThumbUp } from "@material-ui/icons";
import { Autocomplete, Pagination, Rating } from "@material-ui/lab";
import { getStreamedSpaces } from "../../../Redux/actions";
import { useSelector } from 'react-redux';
import millify from 'millify';
import { Box, CircularProgress, Container, Chip, Typography, useMediaQuery, InputBase, Button, TextField } from "@material-ui/core";

const SearchResult = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {area, price_range} = useParams();
    const isMobile = useMediaQuery('(max-width: 900px)');
    const { search_results, no_of_pages:page_num, total_search, arrival } = useSelector(state=>state.space.search_results);
    const [paginate, setPaginate] = useState(1)
    // const search_results = Array.from(result)

    const ifeArea = [
        {area: 'Lagere'},
        {area: 'Asherifa'},
        {area: 'Mayfair'},
        {area: 'Damico'},
    ];

    const prices = [
        {priceRanges: "₦10,000 - ₦50,000"},
        {priceRanges: "₦50,000 - ₦100,000"},
        {priceRanges: "₦100,000 - ₦150,000"},
        {priceRanges: "₦150,000 - ₦200,000"},
        {priceRanges: "₦200,000 - ₦400,000"},
        {priceRanges: "above 400,000"},
    ];

    useEffect(() =>{
        dispatch(getStreamedSpaces(area, price_range, paginate));
        window.scrollTo(0,0)
    },[paginate]);

    return(
        <div className={classes.search}>
            <Box className={classes.section1}>
                {arrival ? (
                    <div className={classes.yourSearch}>
                        {search_results.length ? (
                            <>
                                <Typography variant="" gutterBottom className={classes.heading}>
                                your search results
                                </Typography>
                                <Typography variant="subtitle1">
                                    {total_search} spaces found for "{area}" and "{price_range}"
                                </Typography>
                            </>
                        ):(
                            <Typography variant="" gutterBottom className={classes.heading}>
                                No Space Found
                            </Typography>
                        )}
                    </div>
                ):(
                    <CircularProgress disableShrink />
                )}
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
                    {arrival ? (
                        <>
                            {search_results?.map((result)=>(
                                <Box className={classes.displayBox} onClick={()=>navigate('/single_room')}>
                                    <div className={classes.displayImg}>
                                        <img src={image} alt="roomImg" style={{width: "100%"}}/>
                                    </div>
                                    <div className={classes.detailSection}>
                                        <div className={classes.infoDetails}>
                                            <div className={classes.title}>
                                                <Typography variant="h5">
                                                    {result.roomType}
                                                </Typography>
                                                <Rating name="read-only" className={classes.rating} value={3} readOnly />
                                                <ThumbUp style={{fontSize: 15, color: 'rgb(200, 100, 100)'}} />
                                                <Typography variant="subtitle2">
                                                    <Link to="">show on map</Link> . 
                                                    {result.compoundId__areaLocated}
                                                </Typography>
                                                <Typography variant="subtitle2">
                                                    {result.compoundId__comp_name} compound
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
                                                    {result.kitchen&&(
                                                        <>
                                                            <div className={classes.properties}>
                                                                <CheckCircle className={classes.icon} />
                                                                <Typography variant="caption">Kitchen</Typography>
                                                            </div>
                                                        </>
                                                    )}
                                                    <div className={classes.properties}>
                                                        {result.flatscreenTV&&(
                                                            <>
                                                                <CheckCircle className={classes.icon} />
                                                                <Typography variant="caption">{`Flat Screen TV`}</Typography>
                                                            </>
                                                        )}
                                                    </div>
                                                    <div className={classes.properties}>
                                                        {result.noOfWindows&&(
                                                            <>
                                                            <CheckCircle className={classes.icon} />
                                                            <Typography variant="caption">{`${result.noOfWindows} windows`}</Typography>
                                                            </>
                                                        )}
                                                    </div>
                                                    <div className={classes.properties}>
                                                        {result.bathtube&&(
                                                            <>
                                                                <CheckCircle className={classes.icon} />
                                                                <Typography variant="caption">{'Bathtube'}</Typography>
                                                            </>
                                                        )}
                                                    </div>
                                                    <div className={classes.properties}>
                                                        {result.cleaner&&(
                                                            <>
                                                                <CheckCircle className={classes.icon} />
                                                                <Typography variant="caption">{'cleaner'}</Typography>
                                                            </>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <Typography variant="h5">₦{millify(Number(result.room_yearlyPrice).toFixed(0), {precision: 4})}</Typography>
                                            </div>
                                        </div>
                                    </div>
                                </Box>
                            ))}
                        </>
                    ): (
                        <CircularProgress disableShrink />
                    )}
                    
                {(search_results.length/10) && arrival && (
                    <Pagination onChange={(e, page)=>setPaginate(page)} className={classes.pagination} count={page_num} />
                )}
                </div>
            </Container>
            <Footer />
        </div>
    )
};

export default SearchResult