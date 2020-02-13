import React from 'react';
import clsx from 'clsx';
import { Bar } from 'react-chartjs-2';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Button,
  Theme,
  withStyles,
  WithStyles
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import { IApplicationState } from 'src/store';
import { connect } from 'react-redux';
import ILatestSalesState from 'src/store/states/views/Dashboard/components/LatestSalesState';

const styles = (theme: Theme) => ({
  root: {},
  chartContainer: {
    height: 400,
    position: 'relative' as any
  },
  actions: {
    justifyContent: 'flex-end' as any
  }
});

class LatestSales extends React.PureComponent<ILatestSalesState & WithStyles<typeof styles>> {
  public render() {
    return (
      <Card
        className={clsx(this.props.classes.root)}
      >
        <CardHeader
          action={
            <Button
              size="small"
              variant="text"
            >
              Last 7 days <ArrowDropDownIcon />
            </Button>
          }
          title="Latest Sales"
        />
        <Divider />
        <CardContent>
          <div className={this.props.classes.chartContainer}>
            <Bar
              data={this.props.data}
              options={this.props.options}
            />
          </div>
        </CardContent>
        <Divider />
        <CardActions className={this.props.classes.actions}>
          <Button
            color="primary"
            size="small"
            variant="text"
          >
            Overview <ArrowRightIcon />
          </Button>
        </CardActions>
      </Card>
    );
  }
}

const mapStateToProps = (state: IApplicationState, ownProps: any) => {
  return {
    ...ownProps,
    ...state.latestSales
  }
}

export default connect(
  mapStateToProps
)(withStyles(
  styles as any, { withTheme: true }
)(LatestSales as any)); 

