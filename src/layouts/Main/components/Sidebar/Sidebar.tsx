import React from 'react';
import { connect } from 'react-redux';
import { Theme } from '@material-ui/core/styles';
import { WithStyles, withStyles } from '@material-ui/core';
import { Divider, Drawer } from '@material-ui/core';

import Profile from './components/Profile';
import SidebarNav from './components/SidebarNav';
import UpgradePlan from './components/UpgradePlan';

import { ISidebarState } from 'src/store/states/layouts/Main/components/Sidebar/SidebarState';
import { actions as SidebarActionCreators } from 'src/store/actions/layouts/Main/components/Sidebar/SidebarActions';
import { IApplicationState } from 'src/store';
import { IScreenState } from 'src/store/states/layouts/ScreenState';

const styles = (theme: Theme) => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)'
    }
  },
  root: {
    backgroundColor: (theme.palette as any).white,
    display: 'flex',
    flexDirection: 'column' as any,
    height: '100%',
    padding: theme.spacing(2)
  },
  divider: {
    margin: theme.spacing(2, 0)
  }
});

type SidebarProps =
  ISidebarState & IScreenState & WithStyles<typeof styles, true>
  & typeof SidebarActionCreators;

class Sidebar extends React.PureComponent<SidebarProps> {
  public render() {
    return (
      <Drawer
        anchor="left"
        classes={{ paper: this.props.classes.drawer }}
        onClose={this.props.handleSidebarClose}
        open={this.props.isDesktop ? true : this.props.isSidebarOpen}
        variant={this.props.isDesktop ? 'persistent' : 'temporary'}
      >
        <div
          className={this.props.classes.root}
        >
          <Profile />
          <Divider className={this.props.classes.divider} />
          <SidebarNav />
          <UpgradePlan />
        </div>
      </Drawer>
    );
  }
}

const mapStateToProps = (state: IApplicationState, ownProps: any) => {
  return {
    ...ownProps,
    ...state.sidebar,
    ...state.screen
  }
}

export default connect(
  mapStateToProps
)(withStyles(
  styles as any, { withTheme: true }
)(Sidebar as any)); 
