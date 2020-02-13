import React from 'react';
import { Theme, WithStyles, withStyles } from '@material-ui/core/styles';
import Topbar from './components/Topbar';
import { IApplicationState } from 'src/store';
import { connect } from 'react-redux';

const styles = (theme: Theme) => ({
  root: {
    paddingTop: 64,
    height: '100%'
  },
  content: {
    height: '100%'
  }
});

class Minimal extends React.PureComponent<WithStyles<typeof styles>> {
  public render() {
    return (
      <div className={this.props.classes.root}>
        <Topbar />
        <main className={this.props.classes.content}>{this.props.children}</main>
      </div>
    );
  }
};

const mapStateToProps = (state: IApplicationState, ownProps: any) => {
  return {
    ...ownProps
  }
}

export default connect(
  mapStateToProps
)(withStyles(
  styles as any, { withTheme: true }
)(Minimal as any)); 
