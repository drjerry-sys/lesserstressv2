import { alpha, makeStyles }  from "@material-ui/core";

const colour = '#040459';
const border = "#D0D0D0";

export default makeStyles(theme=>({
    search: {
    },
    section1: {
        backgroundColor: colour,
        height: "40vh",
        color: alpha(theme.palette.common.white, 0.8),        
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // paddingTop: theme.spacing(2),
        [theme.breakpoints.down("sm")]: {
            height: "30vh",
        }
    },
    yourSearch: {
        width: "80%",
        textAlign: "center",
        fontSize: "40px",
        fontFamily: "Roboto",
        [theme.breakpoints.down("md")]: {
            fontSize: "30px"
        }
    },
    section2: {
        display: "flex",
        // paddingTop: theme.spacing(3)
    },
    left: {
        flex: 1,
        border: `1px solid ${border}`,
        marginTop: theme.spacing(3),
        height: "fit-content",
        padding: theme.spacing(1),
        position: "sticky",
        top: theme.spacing(10),
        marginBottom: theme.spacing(2),
        borderRadius: theme.shape.borderRadius
    },
    resultSearch: {
        height: "250px",
        width: "100%",
        backgroundColor: "#cca300",
        padding: theme.spacing(1),
        borderRadius: theme.shape.borderRadius
    },
    area: {
        display: "flex",
        flexDirection: "column",
        marginTop: theme.spacing(1)
    },
    button: {
        width: "100%",
        marginTop: theme.spacing(3)
    },
    input: {
        backgroundColor: "#fff",
        padding: "2px 5px",
        borderRadius: theme.shape.borderRadius
    },
    showOnMap: {
        width: "100%",
        height: "200px",
        marginTop: theme.spacing(1),
        backgroundColor: "#f2f2f2"
    },
    right:{
        flex: 4,
        margin: "0 10px"
    },
    displayBox: {
        display: "flex",
        padding: theme.spacing(2),
        border: `1px solid ${border}`,
        borderRadius: theme.shape.borderRadius,
        marginTop: theme.spacing(3),
        height: "fit-content",
    },
    displayImg: {
        flex: 2,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: theme.shape.borderRadius
    },
    detailSection: {
        flex: 5,
        paddingLeft: theme.spacing(2),
    },
    rating: {
        marginRight: "20px",
    },
    chip: {
        backgroundColor: colour,
        color: theme.palette.common.white,
        padding: "0px 1px"
    },
    infoDetails: {
        display: "flex",
        justifyContent: "space-between",
    },
    title: {
        fontSize: "20px",
    },
    properties: {
        display: "flex",
        alignItems: "center",
        marginRight: "10px"
    },
    icon: {
        fontSize: "15px",
        marginRight: "3px",
        color: "grey",
    },
    features: {
        fontSize: "15px",
        paddingTop: theme.spacing(1)
    },
    roomFeatures: {
        display: "flex",
    },
    pagination: {
        margin: "30px 0"
    },
    priceFeatures: {
        display: "flex",
        justifyContent: "space-between",
    }
}));