import { makeStyles } from "@material-ui/core";

const colour = '#040459';

export default makeStyles(theme=> ({
    heading: {
        backgroundColor: colour,
        paddingTop: theme.spacing(8)
    },
    listProperty: {
        backgroundColor: "rgb(240, 240, 240)",
    },
    stepper: {
        // display: "flex",
        // flexWrap: "wrap"
    },
    propertyDetails: {
        paddingTop: theme.spacing(1),
    },
    specifyothers: {
        paddingLeft: theme.spacing(7),
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    sign: {
        display: "flex",
        flexDirection: "row",
        maxWidth: "200px",
        marginTop: theme.spacing(1),
        alignItems: "center"
    },
    add: {
        padding: theme.spacing(2),
        border: '1px solid #D0D0D0',
    }

}))