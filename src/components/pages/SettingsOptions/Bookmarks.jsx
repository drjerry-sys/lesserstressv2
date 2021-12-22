import React from 'react';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Divider, Grid, Typography } from "@material-ui/core";
import useStyles from "./style";
import { Rating } from '@material-ui/lab';

const Bookmarks = () => {

    const classes = useStyles();

    return (
        <div>
            <Box className={classes.right}>
                <Typography variant="h5">Bookmarks</Typography>
                <Typography gutterBottom variant="caption">Here are all your bookmarked spaces</Typography>
                <Divider />
                <div style={{marginTop: "20px"}}>
                    <Grid container>
                        <Grid item xs={12} sm={4} md={4} lg={4}>
                        <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="/static/images/cards/contemplative-reptile.jpg"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Single room
                            </Typography>
                            <Rating value={2.5} precision={0.5} />
                        </CardContent>
                        <CardActions style={{display: "flex", justifyContent: "space-between"}}>
                            <Button size="small" variant="contained" color="secondary">Remove</Button>
                            <Button size="small" variant="contained" color="primary">Visit</Button>
                        </CardActions>
                        </Card>
                        </Grid>
                    </Grid>
                </div>
            </Box>
        </div>
    )
};

export default Bookmarks
