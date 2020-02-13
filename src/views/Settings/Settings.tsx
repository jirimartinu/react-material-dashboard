import React from 'react';
import { Grid, Theme, WithStyles, withStyles } from '@material-ui/core';

import Notifications from './components/Notifications';
import Password  from './components/Password';

const styles = (theme: Theme) => ({
  root: {
    padding: theme.spacing(4)
  }
});

class Settings extends React.PureComponent<WithStyles<typeof styles>> {
  public render() {
    return (
      <div className={this.props.classes.root}>
        <Grid
          container
          spacing={4}
        >
          <Grid
            item
            md={7}
            xs={12}
          >
            <Notifications />
          </Grid>
          <Grid
            item
            md={5}
            xs={12}
          >
            <Password />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(
  styles as any, { withTheme: true }
)(Settings as any); 

