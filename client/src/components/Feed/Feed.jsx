import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";

import PostsFeed from "./PostsFeed/PostsFeed";
import SubscriptionFeed from './SubscriptionFeed/SubscriptionFeed'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    marginTop: 20,
  }
}));

export default function Feed(props) {
  const classes = useStyles();
  return (
    
    <Grid container spacing={3}>
      <Grid item xs={8}>
        <Paper className={classes.paper}>
          Posts Feed Panel
          <PostsFeed />
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.paper}>Subscription Feed Panel
        <SubscriptionFeed/>
        </Paper>
        <Paper className={classes.paper}>Sugested subscription Feed Panel</Paper>
      </Grid>
    </Grid>
  );
}
