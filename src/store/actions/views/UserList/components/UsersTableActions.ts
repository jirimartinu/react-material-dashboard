import { UsersTableConstants } from 'src/store/constants/views/UserList/components/UsersTableConstants';
import { SyntheticEvent } from 'react';


interface IUsersTableSelectAll {
  type: UsersTableConstants.SELECT_ALL;
  isChecked: boolean;
}

interface IUsersTableSelectOne {
  type: UsersTableConstants.SELECT_ONE;
  selectedUsers: string[];
}

interface IUsersTablePageChange {
  type: UsersTableConstants.PAGE_CHANGE;
  page: number;
}

interface IUsersTableRowsPerPage {
  type: UsersTableConstants.ROWS_PER_PAGE_CHANGE;
  rowsPerPage: number;
}

export type KnownUsersTableAction = IUsersTableSelectAll | IUsersTableSelectOne | IUsersTablePageChange | IUsersTableRowsPerPage;

const handleSelectAll = (event: SyntheticEvent) => (dispatch, getState) => {
  dispatch({ type: UsersTableConstants.SELECT_ALL, isChecked: (event.target as any).checked });
}

const handleSelectOne = (event: SyntheticEvent, id: string) => (dispatch, getState) => {
  const selectedIndex = getState().usersTable.selectedUsers.indexOf(id);

  let newSelectedUsers = [];

  if (selectedIndex === -1) {
    newSelectedUsers = newSelectedUsers.concat(getState().usersTable.selectedUsers, id);
  } else if (selectedIndex === 0) {
    newSelectedUsers = newSelectedUsers.concat(getState().usersTable.selectedUsers.slice(1));
  } else if (selectedIndex === getState().usersTable.selectedUsers.length - 1) {
    newSelectedUsers = newSelectedUsers.concat(getState().usersTable.selectedUsers.slice(0, -1));
  } else if (selectedIndex > 0) {
    newSelectedUsers = newSelectedUsers.concat(
      getState().usersTable.selectedUsers.slice(0, selectedIndex),
      getState().usersTable.selectedUsers.slice(selectedIndex + 1)
    );
  }

  dispatch({ type: UsersTableConstants.SELECT_ONE, selectedUsers: newSelectedUsers });
}

const handlePageChange = (event: SyntheticEvent, page: number) => 
  ({ type: UsersTableConstants.PAGE_CHANGE, page: page});

const handleRowsPerPageChange = (event: SyntheticEvent) => 
  ({ type: UsersTableConstants.ROWS_PER_PAGE_CHANGE, rowsPerPage: (event.target as any).value})


export const actions = {
  handleSelectAll,
  handleSelectOne,
  handlePageChange,
  handleRowsPerPageChange
};
