import React from 'react';
import useStyles from "./style";
import { Link } from 'react-router-dom';
import { Typography, Chip, Box, Divider, Avatar, TableContainer, Table, TableRow, TableCell, TableBody, Paper } from "@material-ui/core";

const Security = () => {

    const classes = useStyles();
    const handleEdit = (toEdit) =>{

    }

    return (
        <div>
            <Box className={classes.right}>
                <div className={classes.head}>
                    <div>
                        <Typography variant="h5">Security</Typography>
                        <Typography variant="caption">Adjust your security settings and set up two-factor authentication.</Typography>
                    </div>
                    <div><Avatar src="A" size="large" alt="Al" /></div>
                </div>
                <Divider />
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table" className={classes.table}>
                        <TableBody>
                            <TableRow
                            style={{ '&:last-child td, &:last-child th': { border: 0, }, }}
                            >
                                <TableCell component="th" scope="row">
                                Password
                                </TableCell>
                                <TableCell align="right">Reset your password regularly to keep your account secure</TableCell>
                                <TableCell align="right"><Chip label="Reset" variant="outlined" onClick={()=>handleEdit('fname')}/></TableCell>
                            </TableRow>
                            <TableRow
                            style={{ '&:last-child td, &:last-child th': { border: 0, }, }}
                            >
                                <TableCell component="th" scope="row">
                                Two-factor <br />authentication
                                </TableCell>
                                <TableCell align="right">
                                Add a phone number to set up two-factor authentication
                                </TableCell>
                                <TableCell align="right"><Chip label="Set" variant="outlined" onClick={()=>handleEdit('fname')}/></TableCell>
                            </TableRow>
                            <TableRow
                            style={{ '&:last-child td, &:last-child th': { border: 0, }, }}
                            >
                                <TableCell component="th" scope="row">
                                Active sessions
                                </TableCell>
                                <TableCell align="right">
                                Selecting "Sign out" will sign you out from all devices except this one
                                </TableCell>
                                <TableCell align="right"><Chip label="Sign out" variant="outlined" onClick={()=>handleEdit('fname')}/></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </div>
    )
}

export default Security
