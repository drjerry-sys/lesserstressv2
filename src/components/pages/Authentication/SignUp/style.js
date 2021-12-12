import { alpha, makeStyles } from "@material-ui/core";

const colour = '#040459';

export default makeStyles(theme => ({
    signup: {
        paddingTop: theme.spacing(8),
        width: "350px",
        margin: "0 auto",
        [theme.breakpoints.down("md")]: {
            width: "80%"
        }
    },
    socialMedia: {
        padding: "50px 0 10px",
        [theme.breakpoints.down("md")]: {
            padding: "20px 0 0px"
        }
    },
    sign: {
        textAlign: "center"
    },
    facebook: {
        backgroundColor: "blue",
        borderRadius: theme.shape.borderRadius,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 10px",
        cursor: "pointer"
    },
    icon: {
        fontSize: "30px",
        color: theme.palette.common.white,
    },
    socialText: {
        color: theme.palette.common.white
    },
    input: {
        backgroundColor: "#f2f2f2",
        width: "100%",
        padding: "8px 15px",
        marginTop: "5px",
        borderRadius: theme.shape.borderRadius,
        border: `2px solid ${alpha(colour, 0.1)}`,
        "&:hover": {
            border: `1px solid ${colour}`
        }
    },
    register: {
        marginTop: theme.spacing(2),
        backgroundColor: "blue",
        color: theme.palette.common.white,
        width: "100%"
    },
    haveAccount: {
        marginTop: theme.spacing(2),
        textAlign: "center"
    }
}))