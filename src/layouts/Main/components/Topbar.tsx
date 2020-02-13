import React from 'react';
import { connect } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import { AppBar, Toolbar, Badge, Hidden, IconButton, WithStyles, withStyles, Theme } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';

import { actions as SidebarActions } from 'src/store/actions/layouts/Main/components/Sidebar/SidebarActions';
import { ISidebarState } from 'src/store/states/layouts/Main/components/Sidebar/SidebarState';
import { IApplicationState } from 'src/store';
import { ITopbarState } from 'src/store/states/layouts/Main/components/Sidebar/components/TopbarState';

const styles = (theme: Theme) => ({
  root: {
    boxShadow: 'none'
  },
  flexGrow: {
    flexGrow: 1
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
  }
});

type TopbarProps =
  ITopbarState & ISidebarState & WithStyles<typeof styles>
  & typeof SidebarActions;

class Topbar extends React.PureComponent<TopbarProps> {
  public render() {
    return (
      <AppBar
        className={clsx(this.props.classes.root)}
      >
        <Toolbar>
          <RouterLink to="/">
            <img
              alt="Logo"
              src="/images/logos/logo--white.svg"
            />
          </RouterLink>
          <div className={this.props.classes.flexGrow} />
          <Hidden mdDown>
            <IconButton color="inherit">
              <Badge
                badgeContent={this.props.notifications.length}
                color="primary"
                variant="dot"
              >
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              className={this.props.classes.signOutButton}
              color="inherit"
            >
              <InputIcon />
            </IconButton>
          </Hidden>
          <Hidden lgUp>
            <IconButton
              color="inherit"
              onClick={this.props.handleSidebarOpen}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
    );
  }
}

const mapStateToProps = (state: IApplicationState, ownProps: any) => {
  return {
    ...ownProps,
    ...state.topbar,
    ...state.sidebar
  }
}

export default connect(
  mapStateToProps,
  SidebarActions
)(withStyles(
  styles as any, { withTheme: true }
)(Topbar as any)); 