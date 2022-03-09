import { alpha, makeStyles }  from "@material-ui/core";

const colour = '#040459';
const border = "#D0D0D0";

export default makeStyles(theme=>({
    search: {
    },
    section1: {
        backgroundColor: colour,
        height: "25vh",
        color: alpha(theme.palette.common.white, 0.8),        
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // paddingTop: theme.spacing(2),
        [theme.breakpoints.down("sm")]: {
            height: "30vh",
        }
    },
    heading: {
        fontSize: 30,
        fontWeight: 400
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
        backgroundColor: "#f0f0f0",
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
        cursor: "pointer",
        '&:hover': {
            border: `1px solid #e68a00`,
            boxShadow: 3
        },
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
        }
    },
    goodreviews: {
        [theme.breakpoints.down("sm")]: {
            display: "none"
        }
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
        fontSize: "15px"
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
    },
    search2: {
        backgroundColor: theme.palette.common.white,
        width: "70%",
        marginTop: 20,
        borderRadius: theme.shape.borderRadius,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        padding: 10,
        [theme.breakpoints.down('md')]: {
            width: "80%",
            flexDirection: "column",
            margin: "10px auto"
        }
    },
    autocomplete: {
        width: "38%",
        outline: "none",
        border: "none",
        marginRight: "2%",
        [theme.breakpoints.down("md")]: {
            width: "100%",
            marginRight: "none",
            marginBottom: "10px"
        }
    },
    button2: {
        backgroundColor: colour,
        color: theme.palette.common.white,
        width: "20%",
        [theme.breakpoints.down("md")]: {
            width: "100%"
        }
    },
}));