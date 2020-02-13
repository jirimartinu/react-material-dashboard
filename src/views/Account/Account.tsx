import React from 'react';
import { withStyles, WithStyles, Theme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import AccountDetails from './components/AccountDetails';
import AccountProfile from './components/AccountProfile';

const styles = (theme: Theme) => ({
  root: {
    padding: theme.spacing(4)
  }
});

class Account extends React.PureComponent<WithStyles<typeof styles>> {
  public render() {
    return (
      <div className={this.props.classes.root}>
        <Grid
          container
          spacing={4}
        >
          <Grid
            item
            lg={4}
            md={6}
            xl={4}
            xs={12}
          >
            <AccountProfile />
          </Grid>
          <Grid
            item
            lg={8}
            md={6}
            xl={8}
            xs={12}
          >
            <AccountDetails />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(
  styles as any, { withTheme: true }
)(Account as any);