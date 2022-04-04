import React from 'react';
import useStyles from './style';
import { Box, Paper, Typography, Divider, Avatar } from '@material-ui/core';
import {Cancel} from '@material-ui/icons';

const ChatApp = ({to, setOpenchat}) => {

    const classes = useStyles()

    return (
        <Box className={classes.box}>
            <div>
                <div className={classes.status}>
                    <Avatar style={{marginBottom: '3px'}} />
                    <div className={classes.section1}>
                        <Typography variant="h5">Admin</Typography>
                        <Cancel onClick={()=>setOpenchat(false)} style={{cursor: 'pointer', color: 'grey'}} />
                    </div>
                </div>
                <Divider />
                <div>
                    <Typography variant="p">Bot</Typography>
                </div>
            </div>
            <Paper style={{width: '100%', boxShadow: 'none'}}>
                <div className={classes.eachChat}>
                    <Avatar style={{marginBottom: '3px', width: 24, height: 24}} />
                    <div className={classes.chat}>
                        <Typography variant="caption">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas ab cupiditate rerum fuga corrupti eos quo eius vitae maiores, provident esse, voluptates repellendus, repellat asperiores! Error quia deserunt hic vel.
                        </Typography>
                    </div>
                </div>
                <div className={classes.eachChat}>
                    <Avatar style={{marginBottom: '3px', width: 24, height: 24}} />
                    <div className={classes.chat}>
                        <Typography variant="caption">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas ab cupiditate rerum fuga corrupti eos quo eius vitae maiores, provident esse, voluptates repellendus, repellat asperiores! Error quia deserunt hic vel.
                        </Typography>
                    </div>
                </div>
            </Paper>
        </Box>
    )
};

export default ChatApp;