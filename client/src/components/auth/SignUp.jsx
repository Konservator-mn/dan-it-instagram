
import React, {useState} from 'react'
import {Avatar, Button, CssBaseline, TextField, Link, Grid, Container, Typography }  from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    password2: "",
    usernameError: "",
    passwordError: ""
  })

  const { username, password, password2, usernameError, passwordError } = formData

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const validate = () => {
    let isError = false
    const errors = {
      usernameError: "",
      passwordError: ""
    }

    if (password.length < 6) {
      isError = true
      errors.passwordError = "Password needs to be atleast 6 characters long"
    }

    if (password !== password2) {
        isError = true
        errors.passwordError = "Passwords do not match"  
      }

    if (username.length < 6) {
      isError = true
      errors.usernameError = "Username needs to be atleast 6 characters long"
    }
    setFormData({ ...formData, ...errors })
    return isError
  }

  const onSubmit = async e => {
    e.preventDefault()
    const err = validate()
    if (!err) {
      setFormData({
        username: "",
        password: "",
        password2: "",
        usernameError: "",
        passwordError: ""
      })
    }
    console.log(username, "  ", password);
    
    const socket = window.socket
    socket.emit('register',{
      name: username,
      password: password, 
      sessionId: socket.id
    })

    socket.on('registration_result', (result)=> { 
      console.log(result);
    })
    
    // socket.on('SendUsers', (result)=> { this.setState({users: result})
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit = {e => onSubmit(e)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="username"
                name="username"
                variant="outlined"
                required
                fullWidth
                label="User Name"
                autoFocus
                value = {username}
                onChange={e => onChange(e)}
                error={!(usernameError === "")}
                helperText={usernameError === "" ? "" : usernameError}
              />
            </Grid>
            <Grid item xs={12}>
            <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={e => onChange(e)}
                error={!(passwordError === "")}
                helperText={passwordError === "" ? "" : passwordError}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password2"
                label="Repeat password"
                type="password"
                autoComplete="current-password"
                value={password2}
                onChange={e => onChange(e)}
                error={!(passwordError === "")}
                helperText={passwordError === "" ? "" : passwordError}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}