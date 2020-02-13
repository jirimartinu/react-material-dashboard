import React from 'react';
import clsx from 'clsx';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Card,
  CardActions,
  CardContent,
  Avatar,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  TablePagination,
  Theme,
  WithStyles,
  withStyles
} from '@material-ui/core';

import { getInitials } from 'src/helpers/getInitials';
import { IUsersTableState } from 'src/store/states/views/UserList/components/UsersTableState';
import { actions as UsersTableActions } from 'src/store/actions/views/UserList/components/UsersTableActions';
import { connect } from 'react-redux';
import { IApplicationState } from 'src/store';

const styles = (theme: Theme) => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 1050
  },
  nameContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    marginRight: theme.spacing(2)
  },
  actions: {
    justifyContent: 'flex-end'
  }
});

type UsersTableProps =
  IUsersTableState & WithStyles<typeof styles>
  & typeof UsersTableActions;

class UsersTable extends React.PureComponent<UsersTableProps> {
  public render() {
    return (
      <Card
        className={clsx(this.props.classes.root)}
      >
        <CardContent className={this.props.classes.content}>
          <PerfectScrollbar>
            <div className={this.props.classes.inner}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={this.props.selectedUsers.length === this.props.users.length}
                        color="primary"
                        indeterminate={
                          this.props.selectedUsers.length > 0 &&
                          this.props.selectedUsers.length < this.props.users.length
                        }
                        onChange={this.props.handleSelectAll}
                      />
                    </TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Location</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Registration date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.props.users.slice(0, this.props.rowsPerPage).map(user => (
                    <TableRow
                      className={(this.props.classes as any).tableRow}
                      hover
                      key={user.id}
                      selected={this.props.selectedUsers.indexOf(user.id) !== -1}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={this.props.selectedUsers.indexOf(user.id) !== -1}
                          color="primary"
                          onChange={event => this.props.handleSelectOne(event, user.id)}
                          value="true"
                        />
                      </TableCell>
                      <TableCell>
                        <div className={this.props.classes.nameContainer}>
                          <Avatar
                            className={this.props.classes.avatar}
                            src={user.avatarUrl}
                          >
                            {getInitials(user.name)}
                          </Avatar>
                          <Typography variant="body1">{user.name}</Typography>
                        </div>
                      </TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>
                        {user.address.city}, {user.address.state},{' '}
                        {user.address.country}
                      </TableCell>
                      <TableCell>{user.phone}</TableCell>
                      <TableCell>
                        {moment(user.createdAt).format('DD/MM/YYYY')}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </PerfectScrollbar>
        </CardContent>
        <CardActions className={this.props.classes.actions}>
          <TablePagination
            component="div"
            count={this.props.users.length}
            onChangePage={this.props.handlePageChange}
            onChangeRowsPerPage={this.props.handleRowsPerPageChange}
            page={this.props.page}
            rowsPerPage={this.props.rowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </CardActions>
      </Card>
    );
  }
};

const mapStateToProps = (state: IApplicationState, ownProps: any) => {
  return {
    ...ownProps,
    ...state.usersTable,
  }
}

export default connect(
  mapStateToProps,
  UsersTableActions
)(withStyles(
  styles as any, { withTheme: true }
)(UsersTable as any));
