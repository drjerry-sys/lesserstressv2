import React from 'react';
import useStyles from "./style";
import { Typography, Chip, Box, Divider, Avatar, TableContainer, Table, TableRow, TableCell, TableBody, Paper } from "@material-ui/core";
import { Link } from 'react-router-dom';


const PersonalDetails = () => {

    const classes = useStyles();
    const handleEdit = (toEdit) =>{

    }

    return (
        <div>
            <Box className={classes.right}>
                <div className={classes.head}>
                    <div>
                        <Typography variant="h5">Personal Details</Typography>
                        <Typography variant="caption">Update your info and find out how it's used.</Typography>
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
                                   First Name
                                </TableCell>
                                <TableCell align="right">Jeremiah</TableCell>
                                <TableCell align="right"><Chip label="Edit" variant="outlined" onClick={()=>handleEdit('lname')}/></TableCell>
                            </TableRow>
                            <TableRow
                            style={{ '&:last-child td, &:last-child th': { border: 0, }, }}
                            >
                                <TableCell component="th" scope="row">
                                    Last Name
                                </TableCell>
                                <TableCell align="right">Adedeji</TableCell>
                                <TableCell align="right"><Chip label="Edit" variant="outlined" onClick={()=>handleEdit('fname')}/></TableCell>
                            </TableRow>
                            <TableRow
                            style={{ '&:last-child td, &:last-child th': { border: 0, }, }}
                            >
                                <TableCell component="th" scope="row">
                                Username
                                </TableCell>
                                <TableCell align="right">Choose a display name</TableCell>
                                <TableCell align="right"><Chip label="Edit" variant="outlined" onClick={()=>handleEdit('fname')}/></TableCell>
                            </TableRow>
                            <TableRow
                            style={{ '&:last-child td, &:last-child th': { border: 0, }, }}
                            >
                                <TableCell component="th" scope="row">
                                Email address
                                </TableCell>
                                <TableCell align="right">drjerry000@gmail.com <Chip label="verified" color="primary" size="small"/></TableCell>
                                <TableCell align="right"></TableCell>
                            </TableRow>
                            <TableRow
                            style={{ '&:last-child td, &:last-child th': { border: 0, }, }}
                            >
                                <TableCell component="th" scope="row">
                                Phone number
                                </TableCell>
                                <TableCell align="right">Enter Phone Number</TableCell>
                                <TableCell align="right"><Chip label="Edit" variant="outlined" onClick={()=>handleEdit('fname')}/></TableCell>
                            </TableRow>
                            <TableRow
                            style={{ '&:last-child td, &:last-child th': { border: 0, }, }}
                            >
                                <TableCell component="th" scope="row">
                                Date of birth
                                </TableCell>
                                <TableCell align="right">Enter your date of birth</TableCell>
                                <TableCell align="right"><Chip label="Edit" variant="outlined" onClick={()=>handleEdit('fname')}/></TableCell>
                            </TableRow>
                            <TableRow
                            style={{ '&:last-child td, &:last-child th': { border: 0, }, }}
                            >
                                <TableCell component="th" scope="row">
                                Gender
                                </TableCell>
                                <TableCell align="right">Select your gender</TableCell>
                                <TableCell align="right"><Chip label="Edit" variant="outlined" onClick={()=>handleEdit('fname')}/></TableCell>
                            </TableRow>
                            <TableRow
                            style={{ '&:last-child td, &:last-child th': { border: 0, }, }}
                            >
                                <TableCell component="th" scope="row">
                                Address
                                </TableCell>
                                <TableCell align="right">Add your address</TableCell>
                                <TableCell align="right"><Chip label="Edit" variant="outlined" onClick={()=>handleEdit('fname')}/></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </div>
    )
}

export default PersonalDetails
