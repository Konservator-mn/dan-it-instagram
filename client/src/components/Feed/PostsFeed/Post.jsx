import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import {Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, Avatar, IconButton, Typography, Input, Button, Icon, Badge} from '@material-ui/core'
import { red } from '@material-ui/core/colors'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import CommentIcon from '@material-ui/icons/Comment';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 500,
    marginTop: 20,
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

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="Recipe" className={classes.avatar} src={props.userIcon}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="Settings">
            <MoreVertIcon />
          </IconButton>
        }
        // это наш user name
        title={props.userName}
        subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image={props.photo}
        title={props.captionText}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        {props.captionText}
        </Typography>
      </CardContent>
      <div className={classes.addCommentArea}>
      <Input
        placeholder="Leave a comment"
        className={classes.input}
        inputProps={{
          'aria-label': 'Description',
        }}
      />
      <Button variant="contained" color="primary" className={classes.button}>
        {/* This Button uses a Font Icon, see the installation instructions in the docs. */}
        <Icon className={classes.rightIcon}>send</Icon>
      </Button>
      </div>

      <CardContent className={classes.firstCommentArea}>
      <Typography variant="caption" color="primary" component="p" align="left" display="inline">
          Butlicker:
        </Typography>
        <Typography variant="body2" color="textPrimary" component="p" align="left" display="inline">
          Wow! Amazing photo!
        </Typography>
       
      </CardContent>


      <CardActions disableSpacing>
        <IconButton aria-label="Add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="Share">
          <ShareIcon />
        </IconButton>
        <Badge className={classes.margin} badgeContent={2} color="primary">
          <CommentIcon />
        </Badge>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="Show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <CardContent className={classes.firstCommentArea}>
        <Typography variant="caption" color="primary" component="p" align="left" display="inline">
          HuiVpalto:
        </Typography>
        <Typography variant="body2" color="textPrimary" component="p" align="left" display="inline">
          Pizdato, bratan!
        </Typography>
        </CardContent>
        </CardContent>
      </Collapse>
    </Card>
  );
}