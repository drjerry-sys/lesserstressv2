import { Box, Container, Grid, Typography } from '@material-ui/core';
import { Highlight, Bathtub, Opacity, Wc } from "@material-ui/icons";
import React from 'react';
import useStyles from "./style";

const Room = () => {

    const classes = useStyles();

    return (
        <div>
            <div className={classes.top} />
            <Box className={classes.body}>
                <Container>
                    <Typography variant="h5">Baba Lasis Compound</Typography>
                    <Typography variant="body2">along Ife-Ilesha express road, Ife state of Osun</Typography>
                </Container>
                <div className={classes.imgScroll}></div>
                <Container>
                    <Typography variant="h5" gutterBottom style={{color: "#040459"}}> 
                        Information about {"Baba Lasis Compound"}
                    </Typography>
                    <Grid container>
                        <Grid item xs={12} sm={7} md={7} lg={7}>
                            <div className={classes.facilities}>
                                <div className={classes.light}>
                                    <div><Highlight /></div>
                                    <div><Typography variant="subtitle2">Electricity</Typography></div>
                                </div>
                                <div className={classes.light}>
                                    <div><Opacity /></div>
                                    <div><Typography variant="subtitle2">Water</Typography></div>
                                </div>
                                <div className={classes.light}>
                                    <div><Wc /></div>
                                    <div><Typography variant="subtitle2">{1} Toilet per room</Typography></div>
                                </div>
                                <div className={classes.light}>
                                    <div><Bathtub /></div>
                                    <div><Typography variant="subtitle2">{1} Bathroom per room</Typography></div>
                                </div>
                            </div>
                            <div className={classes.terms}>
                                <Typography variant="subtitle1" gutterBottom><b>Terms and Condition about {"Baba Lasis Compound"}</b></Typography>
                                <Typography variant="body2">check in: {"4:00pm"}</Typography>
                                <Typography variant="body2">check out: {"4:00pm"}</Typography>
                                <Typography variant="body2">Animals: not allowed</Typography>
                                <Typography variant="body2">Children: allowed</Typography>
                                <Typography variant="body2">Smoking: not allowed</Typography>
                                <Typography variant="body2">Party: not allowed</Typography>
                                <Typography variant="subtitle1" gutterBottom style={{paddingTop: "20px"}}><b>About</b></Typography>
                                <Typography variant="subtitle1" gutterBottom>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, culpa? Pariatur suscipit vero accusantium facilis? Nisi velit, eum nobis vero nihil quod, praesentium unde culpa, architecto ea adipisci quo excepturi.
                                </Typography>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={5} md={5} lg={5}>
                            <div>
                                <Typography variant="h6">
                                    Rooms in this compound
                                </Typography>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>
    )
}

export default Room
