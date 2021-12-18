import { makeStyles } from "@material-ui/core";

export default makeStyles(theme=> ({
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
    
}))