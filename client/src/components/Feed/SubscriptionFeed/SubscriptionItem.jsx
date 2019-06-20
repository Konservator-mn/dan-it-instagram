import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import {Container, Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, Avatar, IconButton, Typography, Input, Button, Icon, Badge} from '@material-ui/core'
import { red } from '@material-ui/core/colors'

const useStyles = makeStyles(theme => ({
  container: {
      maxWidth: 250,
      marginTop: 20,
      display: "flex",
      justifyContent: "space-between"
   
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
    addCommentArea: {
      display: 'flex',
      justifyContent: 'space-between',
      width: "100%",
      padding: 5,
    },
  
    button: {
      margin: theme.spacing(1),
    },
  
    input: {
      width: "80%"
    },
  
    firstCommentArea: {
      display: 'flex',
      justifyContent: 'space-between',
      alignContent: 'flex-end',
    }
  
  }));
  
  export default function SubscriptionItem(props) {
    const classes = useStyles()
  
      return (
        <div className={classes.container} >
            <Avatar aria-label="Recipe" className={classes.avatar} src={props.userIcon}>
              {props.avatar}
             </Avatar>
          <Typography  variant="h5" >{props.userName}</Typography>
          </div>

    )
  }