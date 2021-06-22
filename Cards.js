import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'black',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: " rgb(105,105,105)",
  },
  card1: {
    fontSize: '12px',
    backgroundColor: "",
    fontFamily: 'sans-serif',
    fontWeight: "fontWeightBold",
    fontColor: "white",
    fontSize: "20px",
    
  },
  GraphImageCard: {
    width: "50rem",
    backgroundColor: " rgb(105,105,105)",
    width: "24rem",
    height: "100%",
  },
  GraphPaper: {
    width: "500px",
    backgroundColor: " rgb(105,105,105)",
  },
  ApplicationCard: {
    marginTop: "12px", 
    fontFamily: "Roboto",
  }
}));

export default function Cards() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
          
            <Typography component='div' className={classes.card1}>Total Applications </Typography>
            <Typography component="div">
            <Box fontWeight="fontWeightBold" m={1}>
              21246
            </Box>
            </Typography>
            
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
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
        <Grid item xs={3}>
          <Paper className={classes.paper}>
          <Box component='div' className={classes.card1} fontWeight="fontWeightBold" textAlign="left">Total Application </Box>
            <Typography component="div">
            <Box textAlign="left"  fontWeight="fontWeightBold" m={1}>
              21246
            </Box>
            <Box textAlign="left" fontWeight="fontWeightBold" m={1}>
              0.01 
            </Box>
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.GraphPaper}>
            
          <BottomNavigation style={{color: "blue"}}>
          
            <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />}/>
            <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
            <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
          </BottomNavigation>
          <img className={classes.GraphImageCard} style={{}} src="https://media.istockphoto.com/photos/stock-market-investment-graph-with-indicator-and-volume-data-picture-id1221293664?b=1&k=6&m=1221293664&s=170667a&w=0&h=VQCGaCFdXKWlS3ILWpzDBY_ZOY62L74w_SzOpRiCWY0=" />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
