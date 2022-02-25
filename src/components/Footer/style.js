import { makeStyles, alpha } from "@material-ui/core";

const colour = '#040459';

export default makeStyles(theme=>({
    footer: {
        backgroundColor: "#deeaee",
    },
    subscribeWrapper: {
        width: "100%",
        padding: "50px 0"
    },
    footerDetails: {

    },
    saveTypo: {
        fontSize: "20px",
        textAlign: "center",
        // color: alpha(theme.palette.common.white, 0.7)
    },
    subscribeTypo: {
        fontSize: "15px",
        textAlign: "center",
        // color: alpha(theme.palette.common.white, 0.5)
    },
    emailbox: {
        backgroundColor: theme.palette.common.white,
        boxShadow: theme.shadows[3],
        borderRadius: theme.shape.borderRadius,
        height: "50px",
        padding: "0 20px",
    },
    subscribeBox: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        [theme.breakpoints.down("md")]: {
            flexDirection: "column"
        }
    },
    subscribe: {
        backgroundColor: "blue",
        color: theme.palette.common.white,
        height: "50px",
        marginLeft: "5px",
        [theme.breakpoints.down("md")]: {
            marginLeft: "0px",
            marginTop: "5px",
            padding: "10px 50px"
        }
    },
    footerLinks: {
        display: "flex",
        justifyContent: "center",
        marginBottom: "20px"
    },
    copyright: {
        fontSize: "12px",
        // fontStyle: "italics",
        textAlign: "center",
        // color: alpha(theme.palette.common.white, 0.8),
        padding: "20px 0"
    },
    footerUl: {
        // color: theme.palette.common.white,
        listStyle: "none",
        textDecoration: "none",
        lineHeight: "25px",
        padding: "0 50px",
        [theme.breakpoints.down("md")]: {
            // display: "flex",
            // flexDirection: "row",
            // flexWrap: "wrap"
            padding: "0 30px",

        }
    },
    link: {
        textDecoration: "none",
        // color: alpha(theme.palette.common.white, 0.6),
    }
}))