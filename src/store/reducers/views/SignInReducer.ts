import { Action, Reducer } from 'redux';
import { SignInConstants } from 'src/store/constants/views/SignInConstants';
import { KnownSignInAction } from 'src/store/actions/views/SignInActions';
import { ISignInState } from 'src/store/states/views/SignInState';

const unloadedState: ISignInState = {
  formState: {
    isValid: false,
    values: {},
    touched: {},
    errors: {}
  }
}

export const SignInReducer: Reducer<ISignInState> = (state: ISignInState = unloadedState, incomingAction: Action) => {
  const action = incomingAction as KnownSignInAction;

  switch (action.type) {
    case SignInConstants.FORM_CHANGE:
      return {
        formState: {
          ...state.formState,
          values: {
            ...state.formState.values,
            [(action.event.target as HTMLInputElement).name]: (action.event.target as HTMLInputElement).type === 'checkbox'
              ? (action.event.target as HTMLInputElement).checked
              : (action.event.target as HTMLInputElement).value
          },
          touched: {
            ...state.formState.touched,
            [(action.event.target as HTMLInputElement).name]: true
          }
        }
      };
    case SignInConstants.FORM_ERRORS:
      return {
        formState: {
          ...state.formState,
          isValid: action.errors ? false : true,
          errors: action.errors || {}
        }
      }
    default:
      // eslint-disable-next-line
      const exhaustiveCheck: never = action;
  }

  return state || unloadedState;
};