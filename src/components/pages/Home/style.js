import { makeStyles, alpha } from '@material-ui/core';
import image from "../../../assets/images/homejpg.jpg";

const colour = '#040459';

export default makeStyles(theme=>({
    wrapper: {
        height: "95vh",
        background: `url(${image})`,
        width: "100%",
        backgroundPosition: "left top",
    },
    homeColor: {
        width: "100%",
        height: "inherit",
        backgroundColor: colour,
        opacity: 0.9,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
    },
    heading: {
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        flexDirection: "column",
        color: theme.palette.common.white
    },
    mainHead: {
        fontWeight: 500,
        lineHeight: "30px",
        marginBottom: theme.spacing(3)
    },
    search: {
        backgroundColor: theme.palette.common.white,
        width: "70%",
        marginTop: 20,
        borderRadius: theme.shape.borderRadius,
        opacity: 1,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        padding: 10,
        [theme.breakpoints.down('md')]: {
            width: "80%",
            flexDirection: "column"
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
    button: {
        backgroundColor: colour,
        color: theme.palette.common.white,
        width: "20%",
        [theme.breakpoints.down("md")]: {
            width: "100%"
        }
    },
    advertise: {
        width: "100%",

        // height: `calc(100vh - 70px)`,
    },
    cardmedia: {
        width: 300,
        maxHeight: 150,
        margin: "auto"
    },
    overall: {
        padding: "20px 100px",
        backgroundColor: theme.palette.common.white,
        [theme.breakpoints.down("md")]: {
            padding: "20px 30px"
        }
    },
    container: {
        margin: "50px 0px",
        textAlign: "center",
        padding: "50px 0px",
        [theme.breakpoints.down("md")]: {
            margin: "20px 0",
            padding: "30px 0"
        }
    },
    tour: {
        backgroundColor: colour,
        color: theme.palette.common.white,
        height: 50,
        marginTop: theme.spacing(3)
    },
    inspection: {
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 20px",
        alignItems: "center",
        flexDirection: "column"
    },
    roomTypes: {
        [theme.breakpoints.down("md")]: {
            marginTop: 20
        }
    },
    roomContent: {
        width: "60%",
        [theme.breakpoints.down("md")]: {
            width: "80%"
        }
    },
    topAreas: {
        // margin: "0px 50px",
    },
    areaText: {
        fontSize: 25,
        color: colour
    },
    areaImg: {
        height: 300,
        backgroundColor: alpha(colour, 0.9),
        width: "inherit",
        borderRadius: theme.shape.borderRadius,
        margin: "auto auto",
        color: theme.palette.common.white,
    },
    areaName: {
        textAlign: "center",
        lineHeight: "300px"
    },
    contentMedia: {
        padding: "5px",
        borderRadius: theme.shape.borderRadius
    },
    ratingdiv: {
        display: "flex",
        marginBottom: "10px"
    },
    rating: {
        marginRight: "20px",
    },
    ratingChip: {
        backgroundColor: colour,
        color: theme.palette.common.white
    },
    properties: {
        display: "flex",
        alignItems: "center",
    },
    icon: {
        fontSize: "15px",
        marginRight: "10px",
        color: "grey",
    },
    bottomContent: {
        backgroundColor: "#deeaee",
        padding: "10px",
        borderRadius: theme.shape.borderRadius,
        color: alpha(colour, 0.8),
        marginTop: theme.spacing(3),
        display: "flex",
        justifyContent: "space-between"
    },
    price: {
        fontSize: "20px",
        // fontWeight: 500,
        textAlign: "center"
    },
    period: {
        textAlign: "center"
    },
    trending: {
        width: "100%",
        marginBottom: "50px",
    },
    browseAll: {
        backgroundColor: colour,
        color: theme.palette.common.white,
        margin: "7px auto",
        marginTop: theme.spacing(8),
    },
    bottomDiv: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },
    secondWrapper: {
        backgroundColor: "#f2f2f2",
        width: "100%",
        color: colour,
        display: "flex",
        flexDirection: "column",
    },
    howitworkswrapper: {
        maxWidth: "50%",
        margin: "40px auto",
        [theme.breakpoints.down("md")]: {
            maxWidth: "80%",
            // margin: "40px auto",
        }
    },
    howitworks: {
        textAlign: "center",
        marginBottom: "10px"
    },
    allyouneed: {
        fontSize: "18px",
        textAlign: "center"
    },
    findSubmmitSpace: {
        margin: "0 auto",
        marginBottom: "50px",
        [theme.breakpoints.down("md")]: {
            display: "flex",
            flexDirection: "column"
        }
    },
    find: {
        padding: "10px 60px",
        backgroundColor: colour,
        color: theme.palette.common.white,
    },
    submit: {
        padding: "10px 60px",
        marginLeft: "20px",
        boxShadow: theme.shadows[1],
        color: colour,
        [theme.breakpoints.down("md")]: {
            marginLeft: "0",
            width: "100%",
            marginTop: "10px"
        }
    },
    stepsection: {
        padding: "30px 100px",
        backgroundColor: "#f2f2f2",
        [theme.breakpoints.down("md")]: {
            padding: "20px 30px 0px"
        }
    },
    chooseCard: {
        height: "350px",
        // width: "100%",
        backgroundColor: theme.palette.common.white,
        borderRadius: theme.shape.borderRadius,
        display: "flex",
        // justifyContent: "center",
        flexDirection: "column"
    },
    round: {
        width: "100px",
        height: "100px",
        borderRadius: "50px",
        backgroundColor: alpha(theme.palette.common.black, 0.15),
        margin: "0 auto",
        marginTop: theme.spacing(4),
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    homeIcon: {
        fontSize: "50px",
        color: "white"
    },
    details: {
        margin: "0 auto",
        maxWidth: "80%",
    },
    stepAction: {
        textAlign: "center",
        fontSize: "20px",
        fontWeight: 400,
        color: colour,
        padding: "30px 0 10px 0"
    },
    stepDetail: {
        textAlign: "center",
        fontSize: "15px",
        color: colour,
    },
    findLocation: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        padding: "60px 0"
    },
    locationButton: {
        backgroundColor: colour,
        color: theme.palette.common.white,
        margin: "0 auto"
    }
}))