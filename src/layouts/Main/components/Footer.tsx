import React from 'react';
import clsx from 'clsx';
import { Typography, Link, WithStyles, withStyles, Theme } from '@material-ui/core';
import { IApplicationState } from 'src/store';
import { connect } from 'react-redux';

const styles = (theme: Theme) => ({
  root: {
    padding: theme.spacing(4)
  }
});

class Footer extends React.PureComponent<WithStyles<typeof styles>> {
  public render() {
    return (
      <div
        className={clsx(this.props.classes.root)}
      >
        <Typography variant="body1">
          &copy;{' '}
          <Link
            component="a"
            href="https://devias.io/"
            target="_blank"
          >
            Devias IO
          </Link>
          . 2019
        </Typography>
        <Typography variant="caption">
          Created with love for the environment. By designers and developers who
          love to work together in offices!
        </Typography>
      </div>
    );
  }
}

const mapStateToProps = (state: IApplicationState, ownProps: any) => {
  return {
    ...ownProps,
  }
}

export default connect(
  mapStateToProps
)(withStyles(
  styles as any, { withTheme: true }
)(Footer as any)); 

