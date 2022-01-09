import { alpha, makeStyles } from "@material-ui/core";

const colour = '#040459';

export default makeStyles(theme=>({
    forgotPassword: {
        width: "300px",
        margin: "0 auto",
        marginTop: theme.spacing(12),
        display: "flex",
        justifyContent: "center",
        flexDirection: "column"
    },
    enterEmail: {
        backgroundColor: "#f2f2f2",
        padding: "5px 20px",
        margin: "5px 10px",
        width: "100%",
        borderRadius: theme.shape.borderRadius
    },
    recover: {
        textAlign: "center"
    },
    send: {
        textAlign: "center"
    },
    sendPassword: {
        backgroundColor: colour,
        color: alpha(theme.palette.common.white, 0.8),
        width: "100%",
        margin: "5px auto"
    },
    img: {
        width: "100px",
        margin: "0 auto"
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
    }
}));