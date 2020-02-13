import React from 'react';
import { withStyles, WithStyles, Theme } from '@material-ui/core';

import UsersToolbar from './components/UsersToolbar';
import UsersTable from './components/UsersTable';

const styles = (theme: Theme) => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
});

class UserList extends React.PureComponent<WithStyles<typeof styles>> {
  public render() {
    return (
      <div className={this.props.classes.root}>
        <UsersToolbar />
        <div className={this.props.classes.content}>
          <UsersTable />
        </div>
      </div>
    );
  }
}

export default withStyles(
  styles as any, { withTheme: true }
)(UserList as any);