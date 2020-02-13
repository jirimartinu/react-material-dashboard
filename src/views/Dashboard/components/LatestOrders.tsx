import React from 'react';
import clsx from 'clsx';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Card,
  CardActions,
  CardHeader,
  CardContent,
  Button,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
  TableSortLabel,
  Theme,
  WithStyles,
  withStyles
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import StatusBullet from 'src/components/StatusBullet';

import ILatestOrdersState from 'src/store/states/views/Dashboard/components/LatestOrdersState';
import { connect } from 'react-redux';
import { IApplicationState } from 'src/store';

const styles = (theme: Theme) => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 800
  },
  statusContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  status: {
    marginRight: theme.spacing(1)
  },
  actions: {
    justifyContent: 'flex-end'
  }
});

const statusColors = {
  delivered: 'success',
  pending: 'info',
  refunded: 'danger'
};

class LatestOrders extends React.PureComponent<ILatestOrdersState & WithStyles<typeof styles>> {
  public render() {
    return (
      <Card
        className={clsx(this.props.classes.root)}
      >
        <CardHeader
          action={
            <Button
              color="primary"
              size="small"
              variant="outlined"
            >
              New entry
            </Button>
          }
          title="Latest Orders"
        />
        <Divider />
        <CardContent className={this.props.classes.content}>
          <PerfectScrollbar>
            <div className={this.props.classes.inner}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Order Ref</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell sortDirection="desc">
                      <Tooltip
                        enterDelay={300}
                        title="Sort"
                      >
                        <TableSortLabel
                          active
                          direction="desc"
                        >
                          Date
                        </TableSortLabel>
                      </Tooltip>
                    </TableCell>
                    <TableCell>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.props.orders.map(order => (
                    <TableRow
                      hover
                      key={order.id}
                    >
                      <TableCell>{order.ref}</TableCell>
                      <TableCell>{order.customer.name}</TableCell>
                      <TableCell>
                        {moment(order.createdAt).format('DD/MM/YYYY')}
                      </TableCell>
                      <TableCell>
                        <div className={this.props.classes.statusContainer}>
                          <StatusBullet
                            className={this.props.classes.status}
                            color={statusColors[order.status]}
                            size="sm"
                          />
                          {order.status}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </PerfectScrollbar>
        </CardContent>
        <Divider />
        <CardActions className={this.props.classes.actions}>
          <Button
            color="primary"
            size="small"
            variant="text"
          >
            View all <ArrowRightIcon />
          </Button>
        </CardActions>
      </Card>
    );
  }
}

const mapStateToProps = (state: IApplicationState, ownProps: any) => {
  return {
    ...ownProps,
    ...state.latestOrders
  }
}

export default connect(
  mapStateToProps
)(withStyles(
  styles as any, { withTheme: true }
)(LatestOrders as any)); 
