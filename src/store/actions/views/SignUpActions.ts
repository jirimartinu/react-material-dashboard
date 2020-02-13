import { SignUpConstants } from 'src/store/constants/views/SignUpConstants';
import { SyntheticEvent } from 'react';
import { goBack, push } from 'connected-react-router';
import validate from 'validate.js';

const schema = {
  firstName: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 32
    }
  },
  lastName: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 32
    }
  },
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
  },
  policy: {
    presence: { allowEmpty: false, message: 'is required' },
    checked: true
  }
};

interface ISignUpFormChange {
  type: SignUpConstants.FORM_CHANGE;
  event: SyntheticEvent;
}

interface ISignUpFormErrors {
  type: SignUpConstants.FORM_ERRORS;
  errors: any;
}

export type KnownSignUpAction = ISignUpFormChange | ISignUpFormErrors;

const handleFormChange = (event: SyntheticEvent) => (dispatch, getState) => {
  event.persist();

  dispatch({ type: SignUpConstants.FORM_CHANGE, event: event });
}

const handleBack = () => (dispatch, getState) => {
  dispatch(goBack());
}

const handleSignUp = (event: SyntheticEvent) => (dispatch, getState) => {
  event.preventDefault();

  dispatch(push('/'));
}

const handleFormErrors = () => (dispatch, getState) => {
  const errors = validate(getState().formState.values, schema);

  dispatch({ type: SignUpConstants.FORM_ERRORS, errors: errors});
}

export const actions = {
  handleFormChange,
  handleBack,
  handleSignUp,
  handleFormErrors
};
