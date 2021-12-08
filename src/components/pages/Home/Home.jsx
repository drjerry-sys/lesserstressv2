import React from 'react';
import useStyles from './style';
import Navbar from  '../../Navbar/Navbar';

const Home = () => {
    
    const classes = useStyles();

    return (
        <div>
            <Navbar />
        </div>
    )
}

export default Home;