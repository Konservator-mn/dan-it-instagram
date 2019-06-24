import React, { useState } from "react"
import {
  Avatar,
  Button,
  TextField,
  Link,
  Grid,
  Typography,
  Container
} from "@material-ui/core"
import CssBaseline from "@material-ui/core/CssBaseline"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import { makeStyles } from "@material-ui/core/styles"


const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}))

export default function SignIn() {
  const classes = useStyles()

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    usernameError: "",
    passwordError: ""
  })

  const { username, password, usernameError, passwordError } = formData

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
        usernameError: "",
        password: "",
        passwordError: ""
      })
    }
  }

  return (
    <Container component='main' maxWidth='xs' style={{height: '80vh'}}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={e => onSubmit(e)}>
          <TextField
            type = 'input'
            variant='outlined'
            margin='normal'
            required
            fullWidth
            label='User Name'
            name='username'
            autoComplete='username'
            autoFocus
            value={username}
            onChange={e => onChange(e)}
            error={!(usernameError === "")}
            helperText={usernameError === "" ? "" : usernameError}
          />
          <TextField
            name='password'
            onChange={e => onChange(e)}
            error={!(passwordError === "")}
            helperText={passwordError === "" ? "" : passwordError}
            value={password}
            type='password'
            variant='outlined'
            margin='normal'
            required
            fullWidth
            label='Password'
            autoComplete='current-password'
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href='/register' variant='body2'>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  )
}
