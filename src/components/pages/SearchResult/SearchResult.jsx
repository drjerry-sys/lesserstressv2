import React from "react";
import useStyles from "./style";
import { Box, Container, Chip, Typography, useMediaQuery, InputBase, Button, TextField } from "@material-ui/core";
import { Autocomplete, Pagination, Rating } from "@material-ui/lab";
import { CheckCircle, Search, ThumbUp } from "@material-ui/icons";
import { Link } from "react-router-dom";
import image from "../../../assets/images/bgpic2.jpeg";
import Footer from "../../Footer/Footer";

const SearchResult = () => {

    const isMobile = useMediaQuery('(max-width: 900px)');
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

    return(
        <div className={classes.search}>
            <Box className={classes.section1}>
                <div className={classes.yourSearch}>
                    <Typography variant="" gutterBottom className={classes.heading}>
                        Your Search results
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
                    <Box className={classes.displayBox}>
                        <div className={classes.displayImg}>
                            <img src={image} alt="roomImg" style={{width: "100%"}}/>
                        </div>
                        <div className={classes.detailSection}>
                            <div className={classes.infoDetails}>
                                <div className={classes.title}>
                                    <Typography variant="h5">
                                        Radisson Lagos IkejaOpens in new window
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
                                    <Typography variant="h5">#60,000</Typography>
                                </div>
                            </div>
                        </div>
                    </Box>
                    <Box className={classes.displayBox}>
                        <div className={classes.displayImg}>
                            <img src={image} alt="roomImg" style={{width: "100%", height: "100px"}} />
                        </div>
                        <div className={classes.detailSection}>
                            <div className={classes.infoDetails}>
                                <div className={classes.title}>
                                    <Typography variant="h5">
                                        Radisson Lagos IkejaOpens in new window
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
                            </div>
                        </div>
                    </Box>
                    <Box className={classes.displayBox}>
                        <div className={classes.displayImg}>
                            <img src={image} alt="roomImg" style={{width: "100%", height: "100px"}} />
                        </div>
                        <div className={classes.detailSection}>
                            <div className={classes.infoDetails}>
                                <div className={classes.title}>
                                    <Typography variant="h5">
                                        Radisson Lagos IkejaOpens in new window
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
                            <div>
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
                            </div>
                        </div>
                    </Box>
                    <Box className={classes.displayBox}>
                        <div className={classes.displayImg}>
                            <img src={image} alt="roomImg" style={{width: "100%", height: "100px"}} />
                        </div>
                        <div className={classes.detailSection}>
                            <div className={classes.infoDetails}>
                                <div className={classes.title}>
                                    <Typography variant="h5">
                                        Radisson Lagos IkejaOpens in new window
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
                            <div>
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
                            </div>
                        </div>
                    </Box>
                    <Box className={classes.displayBox}>
                        <div className={classes.displayImg}>
                            <img src={image} alt="roomImg" style={{width: "100%", height: "100px"}} />
                        </div>
                        <div className={classes.detailSection}>
                            <div className={classes.infoDetails}>
                                <div className={classes.title}>
                                    <Typography variant="h5">
                                        Radisson Lagos IkejaOpens in new window
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
                            <div>
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
                            </div>
                        </div>
                    </Box>
                    <Box className={classes.displayBox}>
                        <div className={classes.displayImg}>
                            <img src={image} alt="roomImg" style={{width: "100%", height: "100px"}} />
                        </div>
                        <div className={classes.detailSection}>
                            <div className={classes.infoDetails}>
                                <div className={classes.title}>
                                    <Typography variant="h5">
                                        Radisson Lagos IkejaOpens in new window
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
                            <div>
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
                            </div>
                        </div>
                    </Box>
                    <Box className={classes.displayBox}>
                        <div className={classes.displayImg}>
                            <img src={image} alt="roomImg" style={{width: "100%", height: "100px"}} />
                        </div>
                        <div className={classes.detailSection}>
                            <div className={classes.infoDetails}>
                                <div className={classes.title}>
                                    <Typography variant="h5">
                                        Radisson Lagos IkejaOpens in new window
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
                            <div>
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
                            </div>
                        </div>
                    </Box>
                    <Box className={classes.displayBox}>
                        <div className={classes.displayImg}>
                            <img src={image} alt="roomImg" style={{width: "100%", height: "100px"}} />
                        </div>
                        <div className={classes.detailSection}>
                            <div className={classes.infoDetails}>
                                <div className={classes.title}>
                                    <Typography variant="h5">
                                        Radisson Lagos IkejaOpens in new window
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
                            <div>
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
                            </div>
                        </div>
                    </Box>
                <Pagination className={classes.pagination} count={10} />
                </div>
            </Container>
            <Footer />
        </div>
    )
};

export default SearchResult