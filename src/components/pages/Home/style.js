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
        flexDirection: "row",
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
    },
    advertise: {
        width: "100%",

        // height: `calc(100vh - 70px)`,
    },
    cardmedia: {
        width: 300,
        maxHeight: 150,
        margin: "auto"
    },
    container: {
        margin: "50px 0px",
        // width: "90%",
        textAlign: "center",
        padding: "50px 0px",
        border: `1px solid ${alpha(theme.palette.common.black, 0.25)}`,
        borderRadius: theme.shape.borderRadius,
    },
    tour: {
        backgroundColor: colour,
        color: theme.palette.common.white,
        height: 50
    },
    inspection: {
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 20px",
        alignItems: "center"
    }
}))