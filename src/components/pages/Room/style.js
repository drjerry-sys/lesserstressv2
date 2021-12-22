import { makeStyles } from "@material-ui/core";

const colour = '#040459';

export default makeStyles(theme=> ({
    top: {
        backgroundColor: colour,
        paddingTop: theme.spacing(8)
    },
    body: {
        backgroundColor: "#f2f2f2",
        minHeight: "100vh",
        padding: theme.spacing(2, 0),
    },
    imgScroll: {
        width: "100%",
        height: "300px",
        margin: theme.spacing(2, 0),
        backgroundColor: theme.palette.common.white
    },
    facilities: {
        display:"flex",
        justifyContent: "space-between",
        paddingTop: theme.spacing(2),
        color: colour
    },
    light: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    terms: {
        padding: theme.spacing(5, 0),
        color: colour
    }
}))