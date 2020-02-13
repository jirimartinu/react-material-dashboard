import { Action, Reducer } from 'redux';
import { SignUpConstants } from 'src/store/constants/views/SignUpConstants';
import { KnownSignUpAction } from 'src/store/actions/views/SignUpActions';
import { ISignUpState } from 'src/store/states/views/SignUpState';

const unloadedState: ISignUpState = {
  formState: {
    isValid: false,
    values: {},
    touched: {},
    errors: {}
  }
}

export const SignUpReducer: Reducer<ISignUpState> = (state: ISignUpState = unloadedState, incomingAction: Action) => {
  const action = incomingAction as KnownSignUpAction;

  switch (action.type) {
    case SignUpConstants.FORM_CHANGE:
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
    case SignUpConstants.FORM_ERRORS:
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