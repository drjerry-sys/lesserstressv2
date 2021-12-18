import { makeStyles } from "@material-ui/core";

export default makeStyles(theme=> ({
    switch: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: theme.spacing(0.5, 3)
    },
    paper: {
        marginTop: theme.spacing(3),
        width: "500px",
        padding: "20px 30px",
        [theme.breakpoints.down("sm")]: {
            width: "100%",
        }
    },
    divider: {
        margin: "10px 0"
    },
    specifyothers: {
        display: "flex",
        flexDirection: "column",
        paddingLeft: theme.spacing(6)
    }
}))