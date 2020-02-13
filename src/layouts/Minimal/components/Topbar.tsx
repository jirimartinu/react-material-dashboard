import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import { AppBar, Toolbar, Theme, withStyles, WithStyles } from '@material-ui/core';
import { IApplicationState } from 'src/store';
import { connect } from 'react-redux';

const styles = (theme: Theme) => ({
  root: {
    boxShadow: 'none'
  }
});

class Topbar extends React.PureComponent<WithStyles<typeof styles>> {
  public render() {
    return (
      <AppBar
        className={clsx(this.props.classes.root)}
        color="primary"
        position="fixed"
      >
        <Toolbar>
          <RouterLink to="/">
            <img
              alt="Logo"
              src="/images/logos/logo--white.svg"
            />
          </RouterLink>
        </Toolbar>
      </AppBar>
    );
  }
}

const mapStateToProps = (state: IApplicationState, ownProps: any) => {
  return {
    ...ownProps
  }
}

export default connect(
  mapStateToProps
)(withStyles(
  styles as any, { withTheme: true }
)(Topbar as any)); 