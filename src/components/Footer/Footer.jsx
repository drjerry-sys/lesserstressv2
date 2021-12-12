import React from 'react';
import useStyles from "./style";

const Footer = () => {

    const classes = useStyles();

    return (
        <div className={classes.footer}>
            <h1>this is Footer</h1>
        </div>
    )
};

export default Footer;