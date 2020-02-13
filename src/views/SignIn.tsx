import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Grid,
  Button,
  IconButton,
  TextField,
  Link,
  Typography,
  Theme,
  WithStyles,
  withStyles
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import FacebookIcon from 'src/icons/FacebookIcon';
import GoogleIcon from 'src/icons/GoogleIcon';

import { ISignInState } from 'src/store/states/views/SignInState';
import { actions as SignInActions } from 'src/store/actions/views/SignInActions';
import { connect } from 'react-redux';
import { IApplicationState } from 'src/store';

const styles = (theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    height: '100%'
  },
  grid: {
    height: '100%'
  },
  quoteContainer: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  quote: {
    backgroundColor: (theme.palette as any).neutral,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'url(/images/auth.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  quoteInner: {
    textAlign: 'center' as any,
    flexBasis: '600px'
  },
  quoteText: {
    color: (theme.palette as any).white,
    fontWeight: 300
  },
  name: {
    marginTop: theme.spacing(3),
    color: (theme.palette as any).white
  },
  bio: {
    color: (theme.palette as any).white
  },
  contentContainer: {},
  content: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column' as any
  },
  contentHeader: {
    display: 'flex',
    alignItems: 'center' as any,
    paddingTop: theme.spacing(5),
    paddingBototm: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  logoImage: {
    marginLeft: theme.spacing(4)
  },
  contentBody: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center'
    }
  },
  form: {
    paddingLeft: 100,
    paddingRight: 100,
    paddingBottom: 125,
    flexBasis: 700,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    }
  },
  title: {
    marginTop: theme.spacing(3)
  },
  socialButtons: {
    marginTop: theme.spacing(3)
  },
  socialIcon: {
    marginRight: theme.spacing(1)
  },
  sugestion: {
    marginTop: theme.spacing(2)
  },
  textField: {
    marginTop: theme.spacing(2)
  },
  signInButton: {
    margin: theme.spacing(2, 0)
  }
});

type SignInProps =
  ISignInState & WithStyles<typeof styles>
  & typeof SignInActions;

class SignIn extends React.PureComponent<SignInProps> {
  componentDidMount() {
    this.props.handleFormErrors();
  }

  componentDidUpdate(prevProps) {
    if (this.props.formState.values !== prevProps.formState.values) {
      this.props.handleFormErrors();
    }
  }

  public render() {
    const hasError = field =>
      this.props.formState.touched[field] && this.props.formState.errors[field] ? true : false;

    return (
      <div className={this.props.classes.root}>
        <Grid
          className={this.props.classes.grid}
          container
        >
          <Grid
            className={this.props.classes.quoteContainer}
            item
            lg={5}
          >
            <div className={this.props.classes.quote}>
              <div className={this.props.classes.quoteInner}>
                <Typography
                  className={this.props.classes.quoteText}
                  variant="h1"
                >
                  Hella narwhal Cosby sweater McSweeney's, salvia kitsch before
                  they sold out High Life.
                </Typography>
                <div className={(this.props.classes as any).person}>
                  <Typography
                    className={this.props.classes.name}
                    variant="body1"
                  >
                    Takamaru Ayako
                  </Typography>
                  <Typography
                    className={this.props.classes.bio}
                    variant="body2"
                  >
                    Manager at inVision
                  </Typography>
                </div>
              </div>
            </div>
          </Grid>
          <Grid
            className={this.props.classes.content}
            item
            lg={7}
            xs={12}
          >
            <div className={this.props.classes.content}>
              <div className={this.props.classes.contentHeader}>
                <IconButton onClick={this.props.handleBack}>
                  <ArrowBackIcon />
                </IconButton>
              </div>
              <div className={this.props.classes.contentBody}>
                <form
                  className={this.props.classes.form}
                  onSubmit={this.props.handleSignIn}
                >
                  <Typography
                    className={this.props.classes.title}
                    variant="h2"
                  >
                    Sign in
                  </Typography>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                  >
                    Sign in with social media
                  </Typography>
                  <Grid
                    className={this.props.classes.socialButtons}
                    container
                    spacing={2}
                  >
                    <Grid item>
                      <Button
                        color="primary"
                        onClick={this.props.handleSignIn}
                        size="large"
                        variant="contained"
                      >
                        <FacebookIcon className={this.props.classes.socialIcon} />
                        Login with Facebook
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        onClick={this.props.handleSignIn}
                        size="large"
                        variant="contained"
                      >
                        <GoogleIcon className={this.props.classes.socialIcon} />
                        Login with Google
                      </Button>
                    </Grid>
                  </Grid>
                  <Typography
                    align="center"
                    className={this.props.classes.sugestion}
                    color="textSecondary"
                    variant="body1"
                  >
                    or login with email address
                  </Typography>
                  <TextField
                    className={this.props.classes.textField}
                    error={hasError('email')}
                    fullWidth
                    helperText={
                      hasError('email') ? this.props.formState.errors.email[0] : null
                    }
                    label="Email address"
                    name="email"
                    onChange={this.props.handleFormChange}
                    type="text"
                    value={this.props.formState.values.email || ''}
                    variant="outlined"
                  />
                  <TextField
                    className={this.props.classes.textField}
                    error={hasError('password')}
                    fullWidth
                    helperText={
                      hasError('password') ? this.props.formState.errors.password[0] : null
                    }
                    label="Password"
                    name="password"
                    onChange={this.props.handleFormChange}
                    type="password"
                    value={this.props.formState.values.password || ''}
                    variant="outlined"
                  />
                  <Button
                    className={this.props.classes.signInButton}
                    color="primary"
                    disabled={!this.props.formState.isValid}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Sign in now
                  </Button>
                  <Typography
                    color="textSecondary"
                    variant="body1"
                  >
                    Don't have an account?{' '}
                    <Link
                      component={RouterLink}
                      to="/sign-up"
                      variant="h6"
                    >
                      Sign up
                    </Link>
                  </Typography>
                </form>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state: IApplicationState, ownProps: any) => {
  return {
    ...ownProps,
    ...state.signIn,
  }
}

export default connect(
  mapStateToProps,
  SignInActions
)(withStyles(
  styles as any, { withTheme: true }
)(SignIn as any)); 