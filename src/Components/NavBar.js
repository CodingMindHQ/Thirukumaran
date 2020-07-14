import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import withStyles from '@material-ui/core/styles/index'
/*const styles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
    alignItems: 'center',
  },
  typography: {
     flexGrow: 1,
    align: "center",
  }
}));*/
const NavBar = () => {
//const classes = styles();
    return(
        <div /*className={classes.root*/ >
        <AppBar /*className={classes.appbar} */style={{background : "white"}}  position="static">
            <Toolbar>
                <Typography variant="h6" align="center" /*className={classes.typography}*/ style={{color : "black"}}>
                  Cybersecurity courses
                </Typography>
            </Toolbar>
        </AppBar>
        </div>
    )
}
export default /*withStyles(styles)*/ (NavBar);