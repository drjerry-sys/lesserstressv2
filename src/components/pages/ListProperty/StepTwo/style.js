import { makeStyles } from "@material-ui/core";

export default makeStyles(theme=>({
    steptwo: {},
    paper: {
        marginTop: theme.spacing(3),
        width: "500px",
        // height: "300px",
        padding: "20px 30px",
        [theme.breakpoints.down("sm")]: {
            width: "100%",
        }
    },
    divider: {
        margin: "10px 0"
    }
}))