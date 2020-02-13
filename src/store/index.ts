import { IAlertState } from './states/AlertState';
import { IUsersState } from './states/UsersState';
import { IAuthenticationState } from './states/AuthenticationState';

import { AlertReducer } from './reducers/AlertReducer';
import { UsersReducer } from './reducers/UsersReducer';
import { AuthenticationReducer } from './reducers/AuthenticationReducer';

import { ISidebarState } from './states/layouts/Main/components/Sidebar/SidebarState';
import { ISidebarNavState } from './states/layouts/Main/components/Sidebar/components/SidebarNavState';
import { IAccountDetailsState } from './states/views/Account/components/AccountDetailsState';
import { SidebarReducer } from './reducers/layouts/Main/components/Sidebar/SidebarReducer';
import { AccountDetailsReducer } from './reducers/views/Account/components/AccountDetailsReducer';
import { IAccountProfileState } from './states/views/Account/components/AccountProfileState';
import ILatestOrdersState from './states/views/Dashboard/components/LatestOrdersState';
import ILatestProductsState from './states/views/Dashboard/components/LatestProductsState';
import { LatestOrdersReducer }  from './reducers/views/Dashboard/components/LatestOrdersReducer';
import { LatestProductsReducer }  from './reducers/views/Dashboard/components/LatestProductsReducer';
import { LatestSalesReducer } from './reducers/views/Dashboard/components/LatestSalesReducer';
import ILatestSalesState from './states/views/Dashboard/components/LatestSalesState';
import IProductListState from './states/views/ProductListState';
import { ProductListReducer } from './reducers/views/ProductList/ProductListReducer';
import { IPasswordState } from './states/views/Settings/components/PasswordState';
import { PasswordReducer } from './reducers/views/Settings/components/PasswordReducer';
import { ISignInState } from './states/views/SignInState';
import { ISignUpState } from './states/views/SignUpState';
import { SignInReducer } from './reducers/views/SignInReducer';
import { SignUpReducer } from './reducers/views/SignUpReducer';
import { IUsersTableState } from './states/views/UserList/components/UsersTableState';
import { UsersTableReducer } from './reducers/views/UserList/components/UsersTableReducer';
import { SidebarNavReducer } from './reducers/layouts/Main/components/Sidebar/components/SidebarNavReducer';
import { AccountProfileReducer } from './reducers/views/Account/components/AccountProfileReducer';
import { IScreenState } from './states/layouts/ScreenState';
import { ScreenReducer } from './reducers/layouts/ScreenReducer';
import { ProfileReducer } from './reducers/layouts/Main/components/Sidebar/components/ProfileReducer';
import { IProfileState } from './states/layouts/Main/components/Sidebar/components/ProfileState';
import IUsersByDeviceState from './states/views/Dashboard/components/UsersByDeviceState';
import { UsersByDeviceReducer } from './reducers/views/Dashboard/components/UsersByDeviceReducer';
import { ITopbarState } from './states/layouts/Main/components/Sidebar/components/TopbarState';
import { TopbarReducer } from './reducers/layouts/Main/components/Sidebar/components/TopbarReducer';

// The top-level state object
export interface IApplicationState {
  alert: IAlertState;
  users: IUsersState;
  authentication: IAuthenticationState;

  screen: IScreenState;

  // Layouts
  sidebar: ISidebarState;
  sidebarNav: ISidebarNavState;
  profile: IProfileState;
  topbar: ITopbarState;

  // Views
  accountDetails: IAccountDetailsState;
  accountProfile: IAccountProfileState;

  latestOrders: ILatestOrdersState;
  latestProducts: ILatestProductsState;
  latestSales: ILatestSalesState;
  usersByDevice: IUsersByDeviceState;

  productList: IProductListState;

  password: IPasswordState;

  signIn: ISignInState;
  signUp: ISignUpState;

  usersTable: IUsersTableState;
}

// Whenever an action is dispatched, Redux will update each top-level application state property using
// the reducer with the matching name. It's important that the names match exactly, and that the reducer
// acts on the corresponding ApplicationState property type.
export const reducers = {
  alert: AlertReducer,
  users: UsersReducer,
  authentication: AuthenticationReducer,

  screen: ScreenReducer,

  // Layouts
  sidebar: SidebarReducer,
  sidebarNav: SidebarNavReducer,
  profile: ProfileReducer,
  topbar: TopbarReducer,

  // Views
  accountDetails: AccountDetailsReducer,
  accountProfile: AccountProfileReducer,

  latestOrders: LatestOrdersReducer,
  latestProducts: LatestProductsReducer,
  latestSales: LatestSalesReducer,
  usersByDevice: UsersByDeviceReducer,

  productList: ProductListReducer,
  password: PasswordReducer,

  signIn: SignInReducer,
  signUp: SignUpReducer,

  usersTable: UsersTableReducer,
};

// This type can be used as a hint on action creators so that its 'dispatch' and 'getState' params are
// correctly typed to match your store.
export type IAppThunkAction<TAction> =
  (dispatch: (action: TAction) => void, getState: () => IApplicationState) => void;
