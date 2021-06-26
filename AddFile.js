import React from 'react';
import { makeStyles, Typography } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';

//const useStyles = makeStyles((themes) => ({

//}));

export default function AddFile() {
    //const classes = useStyles();

    return (
        <div>
            <Grid style={{marginLeft: "200px"}}>
                <Typography variant='h6' >
                    Name
                </Typography>
                <input type='text' name='firstname' />
                <Typography variant='h6' >
                    UserName
                </Typography>
                <input type='text' name='username' />
                <Typography variant='h6' >
                    Age
                </Typography>
                <input type='text' name='age' /> <br/>
                <button style={{marginTop: "20px"}}>SUBMIT</button>
            </Grid>
            
        </div>
    );
        
        
}