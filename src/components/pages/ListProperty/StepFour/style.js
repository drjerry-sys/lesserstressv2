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
    roomImg: {
        padding: theme.spacing(5, 5),
        border: "1px dotted #D0D0D0",
        cursor: "pointer",
        backgroundColor:theme.palette.common.white,
        marginTop: theme.spacing(1)
    } 
}))