import { makeStyles, alpha } from '@material-ui/core';
import image from "../../../assets/images/homejpg.jpg";

const colour = '#040459';

export default makeStyles(theme=>({
    wrapper: {
        height: "95vh",
        background: `url(${image})`,
        width: "100%",
        backgroundPosition: "left top",
    },
    homeColor: {
        width: "100%",
        height: "inherit",
        backgroundColor: colour,
        opacity: 0.9,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
    },
    heading: {
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        flexDirection: "column",
        color: theme.palette.common.white
    },
    mainHead: {
        fontWeight: 500,
        lineHeight: "30px",
        marginBottom: theme.spacing(3)
    },
    search: {
        backgroundColor: theme.palette.common.white,
        width: "70%",
        marginTop: 20,
        borderRadius: theme.shape.borderRadius,
        opacity: 1,
        display: "flex",
        justifyContent: "space-between",
        padding: 10,
        [theme.breakpoints.down('md')]: {
            width: "80%",
            flexDirection: "column"
        }
    },
    autocomplete: {
        width: "38%",
        outline: "none",
        border: "none",
        marginRight: "2%",
        [theme.breakpoints.down("md")]: {
            width: "100%",
            marginRight: "none",
            marginBottom: "10px"
        }
    },
    button: {
        backgroundColor: colour,
        color: theme.palette.common.white,
        width: "20%",
        [theme.breakpoints.down("md")]: {
            width: "100%"
        }
    }
}))