import React from 'react';
import { WithStyles, withStyles, Theme } from '@material-ui/core';

const styles = (theme: Theme) => ({
  root: {
    padding: theme.spacing(4)
  },
  iframe: {
    width: '100%',
    minHeight: 640,
    border: 0
  }
});

class Icons extends React.PureComponent<WithStyles<typeof styles>> {
  public render() {
    return (
      <div className={this.props.classes.root}>
        <iframe
          className={this.props.classes.iframe}
          src="https://material.io/tools/icons/?icon=accessibility&style=outline"
          title="Material Design icons"
        />
      </div>
    );
  }
}

export default withStyles(
  styles as any, { withTheme: true }
)(Icons as any); 