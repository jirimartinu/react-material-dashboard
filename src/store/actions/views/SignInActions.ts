import { SignInConstants } from 'src/store/constants/views/SignInConstants';
import { SyntheticEvent } from 'react';
import { goBack, push } from 'connected-react-router';
import validate from 'validate.js';

const schema = {
  email: {
    presence: { allowEmpty: false, message: 'is required' },
    email: true,
    length: {
      maximum: 64
    }
  },
  password: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 128
    }
  }
};

interface ISignInFormChange {
  type: SignInConstants.FORM_CHANGE;
  event: SyntheticEvent;
}

interface ISignInFormErrors {
  type: SignInConstants.FORM_ERRORS;
  errors: any;
}

export type KnownSignInAction = ISignInFormChange | ISignInFormErrors;

const handleFormChange = (event: SyntheticEvent) => (dispatch, getState) => {
  event.persist();

  dispatch({ type: SignInConstants.FORM_CHANGE, event: event });
}

const handleBack = () => (dispatch, getState) => {
  dispatch(goBack());
}

const handleSignIn = (event: SyntheticEvent) => (dispatch, getState) => {
  event.preventDefault();

  dispatch(push('/'));
}

const handleFormErrors = () => (dispatch, getState) => {
  const errors = validate(getState().signIn.formState.values, schema);

  dispatch({ type: SignInConstants.FORM_ERRORS, errors: errors});
}

export const actions = {
  handleFormChange,
  handleBack,
  handleSignIn,
  handleFormErrors
};
