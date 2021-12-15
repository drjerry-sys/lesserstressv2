import { makeStyles } from "@material-ui/core";

const colour = '#040459';

export default makeStyles(theme=> ({
    heading: {
        backgroundColor: colour,
        paddingTop: theme.spacing(8)
    },
    allSettings: {
        paddingTop: theme.spacing(3)
    },
    iconDiv: {
        height: "50px",
        width: "50px",
        borderRadius: "50%",
        backgroundColor: "#f2f2f2",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "grey",
        marginRight: theme.spacing(2)
    },
    eachDiv: {
        display: "flex",
        // alignItems: "center",
        padding: theme.spacing(2),
        border: "1px solid #D0D0D0",
        borderRadius: theme.shape.borderRadius,
        marginTop: theme.spacing(2)
    },
    details: {
        fontWeight: 500
    },
    managePersonal: {
        textDecoration: "none"
    }
}))