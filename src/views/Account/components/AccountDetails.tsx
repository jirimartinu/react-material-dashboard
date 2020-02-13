import React from 'react';
import clsx from 'clsx';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  Button,
  TextField,
  Theme,
  WithStyles,
  withStyles
} from '@material-ui/core';
import { connect } from 'react-redux';

import { IApplicationState } from 'src/store';
import { IAccountDetailsState } from 'src/store/states/views/Account/components/AccountDetailsState';
import { actions as AccountDetailsActions } from 'src/store/actions/views/Account/components/AccountDetailsActions';

const styles = (theme: Theme) => ({
  root: {}
});

type AccountDetailsProps =
  IAccountDetailsState & WithStyles<typeof styles>
  & typeof AccountDetailsActions;

class AccountDetails extends React.PureComponent<AccountDetailsProps> {
  public render() {
    const states = [
      {
        value: 'alabama',
        label: 'Alabama'
      },
      {
        value: 'new-york',
        label: 'New York'
      },
      {
        value: 'san-francisco',
        label: 'San Francisco'
      }
    ];
  
    return (
      <Card
        className={clsx(this.props.classes.root)}
      >
        <form
          autoComplete="off"
          noValidate
        >
          <CardHeader
            subheader="The information can be edited"
            title="Profile"
          />
          <Divider />
          <CardContent>
            <Grid
              container
              spacing={3}
            >
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  helperText="Please specify the first name"
                  label="First name"
                  margin="dense"
                  name="firstName"
                  onChange={this.props.handleAccountDetailsChange}
                  required
                  value={this.props.firstName}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Last name"
                  margin="dense"
                  name="lastName"
                  onChange={this.props.handleAccountDetailsChange}
                  required
                  value={this.props.lastName}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Email Address"
                  margin="dense"
                  name="email"
                  onChange={this.props.handleAccountDetailsChange}
                  required
                  value={this.props.email}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Phone Number"
                  margin="dense"
                  name="phone"
                  onChange={this.props.handleAccountDetailsChange}
                  type="number"
                  value={this.props.phone}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Select State"
                  margin="dense"
                  name="state"
                  onChange={this.props.handleAccountDetailsChange}
                  required
                  select
                  // eslint-disable-next-line react/jsx-sort-props
                  SelectProps={{ native: true }}
                  value={this.props.state}
                  variant="outlined"
                >
                  {states.map(option => (
                    <option
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Country"
                  margin="dense"
                  name="country"
                  onChange={this.props.handleAccountDetailsChange}
                  required
                  value={this.props.country}
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </CardContent>
          <Divider />
          <CardActions>
            <Button
              color="primary"
              variant="contained"
            >
              Save details
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
    ...state.accountDetails,
  }
}

export default connect(
  mapStateToProps,
  AccountDetailsActions
)(withStyles(
  styles as any, { withTheme: true }
)(AccountDetails as any)); 
