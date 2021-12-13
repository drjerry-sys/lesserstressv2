import { makeStyles, alpha } from "@material-ui/core";
import blogImage from "../../../assets/images/bgpic.jfif";

const colour = '#040459';

export default makeStyles(theme=> ({
    blog: {
        backgroundColor: theme.palette.common.white
    },
    wrapper: {
        background: `url(${blogImage})`
    },
    section1: {
        height: "60vh",
        backgroundColor: alpha(colour, 0.9),
        paddingTop: theme.spacing(8),
    },
    ourblog: {  
        textAlign: "center",
        color: alpha(theme.palette.common.white, 0.9),
        fontSize: "45px",
        padding: "20px 0 5px",
        fontWeight: "300"
    },
    headDetail: {
        textAlign: "center",
        color: alpha(theme.palette.common.white, 0.8),
    },
    allPosts: {
        width: "70%",
        margin: "0 auto",
        // height: "400px",
        backgroundColor: theme.palette.common.white,
        position: "relative",
        bottom: "200px",
        borderRadius: theme.shape.borderRadius,
        border: "1px solid #f2f2f2",
        [theme.breakpoints.down("sm")]: {
            width: "90%",
            bottom: "150px"
        }
    },
    firstPost: {
        padding: "20px",
        width: "100%",
        height: "100%",
        backgroundColor: theme.palette.common.white,
    },
    postImage: {
        width: "inherit",
        height: "100%",
        objectFit: "cover",
    },
    firstPostDetails: {
        padding: "20px",
        paddinLeft: "0px",
        textAlign: "justify",
        color: colour,
        [theme.breakpoints.down("sm")]: {
            textAlign: "left"
        }
    },
    details: {
        color: alpha(colour, 0.8)
    },
    poster: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    },
    avatar: {
        height: "20px",
        width: "20px",
        marginRight: "10px",
    },
    pagination: {
        margin: "50px auto"
    }
}));