import React from 'react';
import { connect } from 'react-redux';
import clsx from 'clsx';
import { withStyles, Theme, WithStyles } from '@material-ui/core/styles';

import Sidebar from './components/Sidebar/Sidebar';
import Topbar from './components/Topbar';
import Footer from './components/Footer';

import { IApplicationState } from 'src/store';
import { actions as ScreenActions } from 'src/store/actions/layouts/ScreenActions';
import { IScreenState } from 'src/store/states/layouts/ScreenState';

const styles = (theme: Theme) => ({
  root: {
    paddingTop: 56,
    height: '100%',
    [theme.breakpoints.up('sm')]: {
      paddingTop: 64
    }
  },
  shiftContent: {
    paddingLeft: 240
  },
  content: {
    height: '100%'
  }
});

type MainProps =
  IScreenState &
  typeof ScreenActions & WithStyles<typeof styles, true>;

class Main extends React.PureComponent<MainProps> {
  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions.bind(this));
  }

  componentDidUpdate() {
    window.addEventListener('resize', this.updateDimensions.bind(this));
  }

  updateDimensions() {
    this.props.handleChange(this.props.theme.breakpoints.up('lg'));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions.bind(this));
  }

  public render() {
    return (
      <div
        className={clsx({
          [this.props.classes.root]: true,
          [this.props.classes.shiftContent]: this.props.isDesktop
        })}
      >
        <Topbar />
        <Sidebar />
        <main className={this.props.classes.content}>
          {this.props.children}
          <Footer />
        </main>
      </div>
    );
  }
};

const mapStateToProps = (state: IApplicationState, ownProps: any) => {
  return {
    ...ownProps,
    ...state.screen
  }
}

export default connect(
  mapStateToProps,
  ScreenActions
)(withStyles(
  styles as any, { withTheme: true }
)(Main as any)); 