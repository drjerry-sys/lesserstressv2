
import React from 'react';
import useStyles from "./style";

const PageNotFound = () => {

    const classes = useStyles();

    return (
        <div>
            <div className={classes.top} />
            <h1>page not found</h1>
        </div>
    )
}

export default PageNotFound;