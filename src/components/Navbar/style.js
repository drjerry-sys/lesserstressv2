import { makeStyles, alpha } from '@material-ui/core';

const colour = '#040459';

export default makeStyles(theme=> ({
    appbar: {
        backgroundColor: colour,
        height: 80,
    },
    toolbar: {
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
        backgroundColor: colour,
        boxShadow: 'none',
        border: 'none',
        "&:hover": {
            backgroundColor: alpha(theme.palette.common.white, 0.3),
        }
    },
    logo: {
        height: 50,
        color: theme.palette.common.white
    },
    signup: {
        color: colour,
    },
    signin: {
        color: theme.palette.common.white
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