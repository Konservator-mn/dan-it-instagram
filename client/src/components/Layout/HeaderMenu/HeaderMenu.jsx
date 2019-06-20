import React from 'react';
import {Button, IconButton, Link} from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import {Route} from 'react-router-dom'

import SignIn from '../../SignIn/SignIn'

const useStyles = makeStyles(theme => ({

    menuButton: {
      marginRight: theme.spacing(2),
    },

  }));
export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
     <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu" onClick ={handleClick}>
            <MenuIcon />
          </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}> 
          
        <Link href="/signin" variant="body2" to='/signin'>
                {"Sign In"}
              </Link>
            </MenuItem>
        <MenuItem onClick={handleClose}>Sign Up</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
        
      </Menu>
    </div>
  );
}