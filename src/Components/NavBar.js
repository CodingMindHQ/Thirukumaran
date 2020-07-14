import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
const NavBar = () => {
    return(
        <div>
        <AppBar style={{background : "gray"}} position="absolute">
            <Toolbar>
                <Typography variant="title"style={{color : "red"}}>
                  Learn Python
                </Typography>
            </Toolbar>
        </AppBar>
        </div>
    )
}
export default NavBar;