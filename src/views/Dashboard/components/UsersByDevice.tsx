import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import clsx from 'clsx';
import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Divider,
  Typography,
  Theme,
  withStyles,
  WithStyles
} from '@material-ui/core';
import RefreshIcon from '@material-ui/icons/Refresh';
import { IApplicationState } from 'src/store';
import { connect } from 'react-redux';
import IUsersByDeviceState from 'src/store/states/views/Dashboard/components/UsersByDeviceState';
import { actions as UsersByDeviceActions } from 'src/store/actions/views/Dashboard/components/UsersByDeviceActions';

const styles = (theme: Theme) => ({
  root: {
    height: '100%'
  },
  chartContainer: {
    position: 'relative' as any,
    height: '300px'
  },
  stats: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center'
  },
  device: {
    textAlign: 'center' as any,
    padding: theme.spacing(1)
  },
  deviceIcon: {
    color: (theme.palette as any).icon
  }
});

type UsersByDeviceProps = 
  IUsersByDeviceState & WithStyles<typeof styles, true> &
  typeof UsersByDeviceActions;

class UsersByDevice extends React.PureComponent<UsersByDeviceProps> {
  constructor(props) {
    super(props);
    
    this.props.handleGenerateState(this.props.theme);
  }

  public render() {
    return (
      <Card
        className={clsx(this.props.classes.root)}
      >
        <CardHeader
          action={
            <IconButton size="small">
              <RefreshIcon />
            </IconButton>
          }
          title="Users By Device"
        />
        <Divider />
        <CardContent>
          <div className={this.props.classes.chartContainer}>
            <Doughnut
              data={this.props.data}
              options={this.props.options}
            />
          </div>
          <div className={this.props.classes.stats}>
            {this.props.devices.map(device => {
              const { icon: Icon } = device;

              return (
                <div
                  className={this.props.classes.device}
                  key={device.title}
                >
                  <span className={this.props.classes.deviceIcon}>
                    <Icon />
                  </span>
                  <Typography variant="body1">{device.title}</Typography>
                  <Typography
                    style={{ color: device.color }}
                    variant="h2"
                  >
                    {device.value}%
                  </Typography>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    );
  }
}

const mapStateToProps = (state: IApplicationState, ownProps: any) => {
  return {
    ...ownProps,
    ...state.usersByDevice,
  }
}

export default connect(
  mapStateToProps,
  UsersByDeviceActions
)(withStyles(
  styles as any, { withTheme: true }
)(UsersByDevice as any)); 
