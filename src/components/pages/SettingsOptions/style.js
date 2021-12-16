import { makeStyles } from "@material-ui/core";

const colour = '#040459';

export default makeStyles(theme=>({
    forNav: {
        backgroundColor: colour,
        paddingTop: theme.spacing(8)
    },
    iconDiv: {
        height: "40px",
        width: "40px",
        borderRadius: "50%",
        backgroundColor: "#f2f2f2",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "grey",
        marginRight: theme.spacing(2),
    },
    eachDiv: {
        display: "flex",
        alignItems: "center",
        padding: "10px 20px",
        borderRadius: theme.shape.borderRadius,
        // marginTop: theme.spacing(2),
        cursor: "pointer"
    },
    settingsIcon: {
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        backgroundColor: "#E0E0E0",
        color: "grey",
        dispay: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    right: {
        margin: theme.spacing(3),
        fontWeight: "500",
    },
    head: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: theme.spacing(2)
    },
    table: {
        
    }
}))