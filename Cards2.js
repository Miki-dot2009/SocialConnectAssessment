import React from "react";
import { makeStyles , withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import CallMadeIcon from '@material-ui/icons/CallMade';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#1a90ff',
  },
}))(LinearProgress);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  paper: {
    height: 200,
    width: 450,
    textAlign: "center",
    marginTop: "10px",
    borderColor: "white",
    border: "10px",
    backgroundColor: "#123",
    color: "white",

  },
  paperR: {
    height: 300,
    width: 450,
    textAlign: "center",
    marginTop: "10px",
    borderColor: "white",
    border: "10px",
    backgroundColor: "#123",
    color: "white",
  },
  paperFirst: {
    height: 200,
    width: 700,
    textAlign: "center",
    paddingLeft: 0,
    borderColor: "white",
    border: "10px",
    backgroundColor: "#123",
    color: "white",
  },
  paperSecond: {
    height: 200,
    width: 700,
    textAlign: "center",
    paddingLeft: 0,
    borderColor: "white",
    border: "10px",
    backgroundColor: "#123",
    color: "white",
  },
  borderLine: {
    flexGrow: 1,
    width: 200,
  
  },
  
}));

export default function Cards2() {
  const classes = useStyles();

  return (
    <div>
    <Grid container spacing={1} style={{backgroundColor: "black"}}>
    <Grid item direction="row" xs={4}>
      <Paper variant="outlined" className={classes.paper}>
      <Typography component='div' className={classes.card1}>Total Applications </Typography>
            <Typography component="div">
            <Box fontWeight="fontWeightBold" m={1}>
              21246
            </Box>
            </Typography>
      </Paper>
    </Grid>
    <Grid item direction="row" xs={4}>
      <Paper variant="outlined" className={classes.paper} style={{backgroundColor: "blue"}}>
      <Box component='div' className={classes.card1} textAlign="center">Standard Colabration </Box>
            <Typography component="div">
            <Box textAlign="left" variant = "column" fontWeight="fontWeightBold" m={1}>
              21246
            </Box>
            <Typography variant="caption" display="flex" textAlign="left" gutterBottom>
              Submissions 
            </Typography>
            </Typography>
      </Paper>
    </Grid>
    <Grid item direction="row" xs={4}>
      <Paper variant="outlined" className={classes.paper}>
      <Typography component='div' className={classes.card1}>Total Applications </Typography>
            <Typography component="div">
            <Box fontWeight="fontWeightBold" m={1}>
              21246
            </Box>
            </Typography></Paper>      
    </Grid> 
    <Grid item xs={6}>
      <Paper variant="outlined" className={classes.paperFirst}>
      <Box textAlign="left" style={{fontSize: '15px'}}>
          TOTAL APPLICATIONS 
          <Typography variant="button" style={{marginLeft: "50px"}}>LogIn</Typography>
          <Typography variant="button" style={{marginLeft: "10px"}}>Shares</Typography>
          <Typography variant="button" style={{marginLeft: "10px"}}>Profile</Typography>
          <Typography variant="button" style={{marginLeft: "10px"}}>Logout</Typography>
      </Box>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDTmJYci6oANyvHwyOP4814iw3AE50t9r92g&usqp=CAU" style={{width: "400px"}}/>
        
      </Paper>
    </Grid>
    <Grid item direction="row" xs={6}> 
      <Paper variant="outlined" className={classes.paperSecond}>
      <BorderLinearProgress variant="determinate" value={40} className={classes.borderLine} /> Applications
      <BorderLinearProgress variant="determinate" value={10} className={classes.borderLine} /> Rejected
      <BorderLinearProgress variant="determinate" value={30} className={classes.borderLine} /> On Hold
      <BorderLinearProgress variant="determinate" value={20} className={classes.borderLine} /> Processed
      
      </Paper>    
  </Grid>
  
  <Grid item  direction="column"  xs={8}> 
      <Paper variant="outlined" className={classes.paperR}>
        <Box direction="column" style={{fontSize: '12px'}}>
          Users Reached 
          <Typography variant="button" style={{color: "blue",fontSize: '15px'}}> <CallMadeIcon />+4.16</Typography>
          <br/>
          <Typography variant="p">2407</Typography> <Divider />
        </Box>
        <Box text-align="left" style={{fontSize: '12px'}}>
          Refferals 
          <Typography variant="button" style={{color: "blue",fontSize: '15px'}}> <CallMadeIcon />+4.16</Typography>
          <br/>
          <Typography variant="p">6578</Typography>
        </Box> <Divider />
        <Box text-align="left" style={{fontSize: '12px'}}>
          Shares
          <Typography variant="button" style={{color: "blue",fontSize: '15px'}}> <CallMadeIcon />+4.16</Typography>
          <br/>
          <Typography variant="p">5126</Typography>
        </Box><Divider />
        <Box text-align="left" style={{fontSize: '12px'}}>
          Applications 
          <Typography variant="button" style={{color: "blue",fontSize: '15px'}}> <CallMadeIcon />+4.16</Typography>
          <br/>
          <Typography variant="p">7956</Typography> <br/>
          <br/>
          <br/>
          <Button variant="contained" color="secondary" disableElevation style={{marginRight: "10px",fontSize: "10px"}}>
            Start a New Campaign 
          </Button>
          <Button variant="contained" color="primary" disableElevation style={{fontSize: "10px"}}>
            Pause all runnig Campaigns
          </Button>
        </Box>
      </Paper>    
  </Grid>
  <Grid item direction="row" xs={4}>
      <Paper variant="outlined" className={classes.paper}>
        Open Positions By Department
        <br/>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMqB2829TtBOxp9boE4zEjcaErbGVxRdNQ2g&usqp=CAU"/>
      </Paper>
    </Grid>
  
  </Grid>  
    
    </div>
    
  );
}
