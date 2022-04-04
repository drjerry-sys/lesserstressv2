import { makeStyles } from '@material-ui/core';

export default makeStyles((theme)=>({
    box: {
        width: '100vw',
        height: '80vh',
        position: 'fixed',
        bottom: 0,
        // left: 0,
        right: 0,
        zIndex: 999,
        padding: theme.spacing(1, 2),
        backgroundColor: theme.palette.common.white,
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.shadows[2],
        [theme.breakpoints.up('md')]: {
            bottom: '20px',
            right: '20px',
            width: '400px',
            height: '500px'
        }
    },
    section1: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '90%',
        marginLeft: theme.spacing(1)
    },
    status: {
        display: 'flex',
        // justifyContent: 'space-between',
    },
    eachChat: {
        display: 'flex',
        width: '100%',
        marginTop: theme.spacing(1),
        backgroundColor: theme.palette.grey,
    },
    chat: {
        maxWidth: '70%',
        width: 'calc(100% - 24px)',
        marginLeft: theme.spacing(1),
        textAlign: 'justify'
    }
}))