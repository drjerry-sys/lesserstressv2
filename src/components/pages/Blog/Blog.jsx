import React from 'react';
import useStyles from "./style";
import { Avatar, Box, Card, CardContent, CardMedia, Container, CssBaseline, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import blogImage from "../../../assets/images/homejpg.jpg";
import { Pagination } from '@material-ui/lab';
import Footer from "../../Footer/Footer";

const Blog = () => {

    const classes = useStyles();

    return (
        <div className={classes.blog}>
            <Box className={classes.wrapper}>
                <div className={classes.section1}>
                    <Typography variant="h2" className={classes.ourblog}>
                        Our Blog
                    </Typography>
                    <Typography variant="subtitle1" className={classes.headDetail}>
                        Read the latest news on campus and Ife, write your own article.
                    </Typography>
                </div>
            </Box>
            <Box className={classes.allPosts}>
                <Grid container>
                    <CssBaseline />
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <div className={classes.firstPost}>
                            <img 
                            src={blogImage}
                            className={classes.postImage} alt="post"
                            />
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6}>
                        <Box className={classes.firstPostDetails}>
                            <Link to="/" style={{textDecoration: "none"}}>
                                <Typography variant="h4" gutterBottom>
                                    Designing a dashboard for business
                                </Typography>
                            </Link>
                            <Typography variant="subtitle2" className={classes.details}>
                                Today we are overwhelmed by content, and inspiration can strike anywhere. The point is to collect it and share it in a structured way to inspire your team ...
                            </Typography>
                            <div className={classes.poster} style={{marginTop: "30px"}}>
                                <div className={classes.poster}>
                                    <Avatar className={classes.avatar} />
                                    <Typography variant="caption">
                                        Richard Thomas
                                    </Typography>
                                </div>
                                <Typography variant="caption">
                                    21 February, 2019
                                </Typography>
                            </div>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            {/* to be changed */}
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <Card>
                            <CardMedia component="img" height="250" image={blogImage} alt="post" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                                </Typography>
                                <div className={classes.poster} style={{marginTop: "30px"}}>
                                    <div className={classes.poster}>
                                        <Avatar className={classes.avatar} />
                                        <Typography variant="caption">
                                            Richard Thomas
                                        </Typography>
                                    </div>
                                    <Typography variant="caption">
                                        21 February, 2019
                                    </Typography>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <Card>
                            <CardMedia component="img" height="250" image={blogImage} alt="post" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                                </Typography>
                                <div className={classes.poster} style={{marginTop: "30px"}}>
                                    <div className={classes.poster}>
                                        <Avatar className={classes.avatar} />
                                        <Typography variant="caption">
                                            Richard Thomas
                                        </Typography>
                                    </div>
                                    <Typography variant="caption">
                                        21 February, 2019
                                    </Typography>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <Card>
                            <CardMedia component="img" height="250" image={blogImage} alt="post" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                                </Typography>
                                <div className={classes.poster} style={{marginTop: "30px"}}>
                                    <div className={classes.poster}>
                                        <Avatar className={classes.avatar} />
                                        <Typography variant="caption">
                                            Richard Thomas
                                        </Typography>
                                    </div>
                                    <Typography variant="caption">
                                        21 February, 2019
                                    </Typography>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <Card>
                            <CardMedia component="img" height="250" image={blogImage} alt="post" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                                </Typography>
                                <div className={classes.poster} style={{marginTop: "30px"}}>
                                    <div className={classes.poster}>
                                        <Avatar className={classes.avatar} />
                                        <Typography variant="caption">
                                            Richard Thomas
                                        </Typography>
                                    </div>
                                    <Typography variant="caption">
                                        21 February, 2019
                                    </Typography>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <Card>
                            <CardMedia component="img" height="250" image={blogImage} alt="post" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                                </Typography>
                                <div className={classes.poster} style={{marginTop: "30px"}}>
                                    <div className={classes.poster}>
                                        <Avatar className={classes.avatar} />
                                        <Typography variant="caption">
                                            Richard Thomas
                                        </Typography>
                                    </div>
                                    <Typography variant="caption">
                                        21 February, 2019
                                    </Typography>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <Card>
                            <CardMedia component="img" height="250" image={blogImage} alt="post" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                                </Typography>
                                <div className={classes.poster} style={{marginTop: "30px"}}>
                                    <div className={classes.poster}>
                                        <Avatar className={classes.avatar} />
                                        <Typography variant="caption">
                                            Richard Thomas
                                        </Typography>
                                    </div>
                                    <Typography variant="caption">
                                        21 February, 2019
                                    </Typography>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <Pagination className={classes.pagination} count={10} />
            </Container>
            <Footer />
        </div>
    )
}

export default Blog;