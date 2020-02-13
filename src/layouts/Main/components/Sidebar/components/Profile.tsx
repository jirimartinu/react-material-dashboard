import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import { Theme } from '@material-ui/core/styles';
import { Avatar, Typography, WithStyles, withStyles } from '@material-ui/core';
import { IApplicationState } from 'src/store';
import { connect } from 'react-redux';
import { IProfileState } from 'src/store/states/layouts/Main/components/Sidebar/components/ProfileState';

const styles = (theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column' as any,
    alignItems: 'center',
    minHeight: 'fit-content'
  },
  avatar: {
    width: 60,
    height: 60
  },
  name: {
    marginTop: theme.spacing(1)
  }
});

type ProfileProps =
  IProfileState & WithStyles<typeof styles, true>;

class Profile extends React.PureComponent<ProfileProps> {
  public render() {
    return (
      <div
        className={clsx(this.props.classes.root)}
      >
        <Avatar
          alt="Person"
          className={this.props.classes.avatar}
          component={RouterLink}
          src={this.props.user.avatar}
          to="/settings"
        />
        <Typography
          className={this.props.classes.name}
          variant="h4"
        >
          {this.props.user.name}
        </Typography>
        <Typography variant="body2">{this.props.user.bio}</Typography>
      </div>
    );
  }
}

const mapStateToProps = (state: IApplicationState, ownProps: any) => {
  return {
    ...ownProps,
    ...state.profile,
  }
}

export default connect(
  mapStateToProps
)(withStyles(
  styles as any, { withTheme: true }
)(Profile as any)); 

