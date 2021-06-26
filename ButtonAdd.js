import React from 'react';
//import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

//const useStyles = makeStyles((theme) => ({
 
    
//}));

export default function ButtonAdd() {
    //const classes = useStyles();

    return (
        <Box clone pt={2} pr={1} pb={1} pl={2} mt={0}>
            <Paper elevation={0}>
                <Grid container justify="flex-end" spacing={1}>
                    <Grid item color="black">
                        <Button color="primary" variant="contained">Add +</Button>
                        <Button color="primary">
                        <Avatar>
                            m
                        </Avatar>
                        Login  <ArrowDropDownIcon />
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
            
        </Box>

    );
}
