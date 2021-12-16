import React from 'react';
import useStyles from "./style";
import { Typography, Box, Divider, Avatar, TableContainer, Table, TableRow, TableCell, TableBody, Paper } from "@material-ui/core";
import { Link } from 'react-router-dom';


const PersonalDetails = () => {

    const classes = useStyles();

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
                                    Title
                                </TableCell>
                                <TableCell align="right">Select your title</TableCell>
                                <TableCell align="right"><Link to="">Edit</Link></TableCell>
                            </TableRow>
                            <TableRow
                            style={{ '&:last-child td, &:last-child th': { border: 0, }, }}
                            >
                                <TableCell component="th" scope="row">
                                    Name
                                </TableCell>
                                <TableCell align="right">Adedeji Jeremiah</TableCell>
                                <TableCell align="right"><Link to="">Edit</Link></TableCell>
                            </TableRow>
                            <TableRow
                            style={{ '&:last-child td, &:last-child th': { border: 0, }, }}
                            >
                                <TableCell component="th" scope="row">
                                    Title
                                </TableCell>
                                <TableCell align="right">Select your title</TableCell>
                                <TableCell align="right"><Link to="">Edit</Link></TableCell>
                            </TableRow>
                            <TableRow
                            style={{ '&:last-child td, &:last-child th': { border: 0, }, }}
                            >
                                <TableCell component="th" scope="row">
                                Display name
                                </TableCell>
                                <TableCell align="right">Choose a display name</TableCell>
                                <TableCell align="right"><Link to="">Edit</Link></TableCell>
                            </TableRow>
                            <TableRow
                            style={{ '&:last-child td, &:last-child th': { border: 0, }, }}
                            >
                                <TableCell component="th" scope="row">
                                Email address
                                </TableCell>
                                <TableCell align="right">drjerry000@gmail.com Verified This is the email address you use to sign in. It’s also where we send your booking confirmations.</TableCell>
                                <TableCell align="right"><Link to="">Edit</Link></TableCell>
                            </TableRow>
                            <TableRow
                            style={{ '&:last-child td, &:last-child th': { border: 0, }, }}
                            >
                                <TableCell component="th" scope="row">
                                Phone number
                                </TableCell>
                                <TableCell align="right">Add your phone number Properties or attractions you book will use this number if they need to contact you.</TableCell>
                                <TableCell align="right"><Link to="">Edit</Link></TableCell>
                            </TableRow>
                            <TableRow
                            style={{ '&:last-child td, &:last-child th': { border: 0, }, }}
                            >
                                <TableCell component="th" scope="row">
                                Date of birth
                                </TableCell>
                                <TableCell align="right">Enter your date of birth</TableCell>
                                <TableCell align="right"><Link to="">Edit</Link></TableCell>
                            </TableRow>
                            <TableRow
                            style={{ '&:last-child td, &:last-child th': { border: 0, }, }}
                            >
                                <TableCell component="th" scope="row">
                                Nationality
                                </TableCell>
                                <TableCell align="right">Select the country/region you're from</TableCell>
                                <TableCell align="right"><Link to="">Edit</Link></TableCell>
                            </TableRow>
                            <TableRow
                            style={{ '&:last-child td, &:last-child th': { border: 0, }, }}
                            >
                                <TableCell component="th" scope="row">
                                Gender
                                </TableCell>
                                <TableCell align="right">Select your gender</TableCell>
                                <TableCell align="right"><Link to="">Edit</Link></TableCell>
                            </TableRow>
                            <TableRow
                            style={{ '&:last-child td, &:last-child th': { border: 0, }, }}
                            >
                                <TableCell component="th" scope="row">
                                Address
                                </TableCell>
                                <TableCell align="right">Add your address</TableCell>
                                <TableCell align="right"><Link to="">Edit</Link></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </div>
    )
}

export default PersonalDetails
