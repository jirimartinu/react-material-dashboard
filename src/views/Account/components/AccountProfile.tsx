import React from 'react';
import clsx from 'clsx';
import moment from 'moment';
import {
  Card,
  CardActions,
  CardContent,
  Avatar,
  Typography,
  Divider,
  Button,
  LinearProgress,
  Theme,
  withStyles,
  WithStyles
} from '@material-ui/core';

import { IApplicationState } from 'src/store';
import { IAccountProfileState } from 'src/store/states/views/Account/components/AccountProfileState';
import { connect } from 'react-redux';

const styles = (theme: Theme) => ({
  root: {},
  details: {
    display: 'flex'
  },
  avatar: {
    marginLeft: 'auto',
    height: 110,
    width: 100,
    flexShrink: 0,
    flexGrow: 0
  },
  progress: {
    marginTop: theme.spacing(2)
  },
  uploadButton: {
    marginRight: theme.spacing(2)
  }
});

class AccountProfile extends React.PureComponent<IAccountProfileState & WithStyles<typeof styles>> {
  public render() {
    return (
      <Card
        className={clsx(this.props.classes.root)}
      >
        <CardContent>
          <div className={this.props.classes.details}>
            <div>
              <Typography
                gutterBottom
                variant="h2"
              >
                John Doe
              </Typography>
              <Typography
                color="textSecondary"
                variant="body1"
              >
                {this.props.user.city}, {this.props.user.country}
              </Typography>
              <Typography
                color="textSecondary"
                variant="body1"
              >
                {moment().format('hh:mm A')} ({this.props.user.timezone})
              </Typography>
            </div>
            <Avatar
              className={this.props.classes.avatar}
              src={this.props.user.avatar}
            />
          </div>
          <div className={this.props.classes.progress}>
            <Typography variant="body1">Profile Completeness: 70%</Typography>
            <LinearProgress
              value={70}
              variant="determinate"
            />
          </div>
        </CardContent>
        <Divider />
        <CardActions>
          <Button
            className={this.props.classes.uploadButton}
            color="primary"
            variant="text"
          >
            Upload picture
          </Button>
          <Button variant="text">Remove picture</Button>
        </CardActions>
      </Card>
    );
  }
}

const mapStateToProps = (state: IApplicationState, ownProps: any) => {
  return {
    ...ownProps,
    ...state.accountProfile
  }
}

export default connect(
  mapStateToProps
)(withStyles(
  styles as any, { withTheme: true }
)(AccountProfile as any)); 
