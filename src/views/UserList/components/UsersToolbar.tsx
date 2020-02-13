import React from 'react';
import clsx from 'clsx';
import { Button, Theme, WithStyles, withStyles } from '@material-ui/core';

import SearchInput from 'src/components/SearchInput';

const styles = (theme: Theme) => ({
  root: {},
  row: {
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(1)
  },
  spacer: {
    flexGrow: 1
  },
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  },
  searchInput: {
    marginRight: theme.spacing(1)
  }
});

class UsersToolbar extends React.PureComponent<WithStyles<typeof styles>> {
  public render() {
    return (
      <div
        className={clsx(this.props.classes.root)}
      >
        <div className={this.props.classes.row}>
          <span className={this.props.classes.spacer} />
          <Button className={this.props.classes.importButton}>Import</Button>
          <Button className={this.props.classes.exportButton}>Export</Button>
          <Button
            color="primary"
            variant="contained"
          >
            Add user
          </Button>
        </div>
        <div className={this.props.classes.row}>
          <SearchInput
            className={this.props.classes.searchInput}
            placeholder="Search user"
          />
        </div>
      </div>
    );
  }
}

export default withStyles(
  styles as any, { withTheme: true }
)(UsersToolbar as any); 