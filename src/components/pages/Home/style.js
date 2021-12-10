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
        
    }
}))