import React from 'react';
import clsx from 'clsx';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Button,
  TextField,
  Theme,
  withStyles,
  WithStyles
} from '@material-ui/core';

import { IPasswordState } from 'src/store/states/views/Settings/components/PasswordState';
import { actions as PasswordActions } from 'src/store/actions/views/Settings/components/PasswordActions';
import { connect } from 'react-redux';
import { IApplicationState } from 'src/store';

const styles = (theme: Theme) => ({
  root: {}
});

type PasswordProps =
  IPasswordState
  & typeof PasswordActions;

class Password extends React.PureComponent<PasswordProps & WithStyles<typeof styles>> {
  public render() {
    return (
      <Card
        className={clsx(this.props.classes.root)}
      >
        <form>
          <CardHeader
            subheader="Update password"
            title="Password"
          />
          <Divider />
          <CardContent>
            <TextField
              fullWidth
              label="Password"
              name="password"
              onChange={this.props.handlePasswordChange}
              type="password"
              value={this.props.password}
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Confirm password"
              name="confirm"
              onChange={this.props.handlePasswordChange}
              style={{ marginTop: '1rem' }}
              type="password"
              value={this.props.confirm}
              variant="outlined"
            />
          </CardContent>
          <Divider />
          <CardActions>
            <Button
              color="primary"
              variant="outlined"
            >
              Update
            </Button>
          </CardActions>
        </form>
      </Card>
    );
  }
}

const mapStateToProps = (state: IApplicationState, ownProps: any) => {
  return {
    ...ownProps,
    ...state.password
  }
}

export default connect(
  mapStateToProps
)(withStyles(
  styles as any, { withTheme: true }
)(Password as any)); 
