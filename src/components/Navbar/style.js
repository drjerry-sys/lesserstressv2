import { makeStyles, alpha } from '@material-ui/core';

const colour = '#040459';
const check = false

export default makeStyles(theme=> ({
    appbar: {
        backgroundColor: props=> props.scrolled ? colour : "transparent",
        boxShadow: "none"
        // height: 80,
    },
    toolbar: {
        backgroundColor: "none",
        display: "flex",
        justifyContent: "space-between",
    },
    logoWrapper: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    navigation: {
        color: theme.palette.common.white,
        backgroundColor: props => props.scrolled ? colour : "transparent",
        boxShadow: 'none',
        border: 'none',
        "&:hover": {
            backgroundColor: alpha(theme.palette.common.white, 0.3),
        }
    },
    logo: {
        height: 30,
        color: theme.palette.common.white,
        marginRight: 10,
    },
    signup: {
        color: colour,
        "&:hover": {
            backgroundColor: theme.palette.common.white
        }
    },
    signin: {
        color: theme.palette.common.white,
        boxShadow: 'none',
        border: 'none',
        marginLeft: 10,
        border: `1px solid ${alpha(theme.palette.common.white, 0.3)}`,
        "&:hover": {
            border: '1px solid white',
        }
    },
    menus: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    icon: {
        fontSize: 22,
    },
    badge: {
        marginRight: 20,
    }
}))