import { createAction } from 'redux-actions';

export const LOGIN = 'LOGIN';
export const REGISTRATION = 'REGISTRATION';
export const VERIFY_EMAIL = 'VERIFY_EMAIL';

export const authActionCreators = {
  loginSuccess: createAction(LOGIN),
  registerUserSuccess: createAction(REGISTRATION),
  verifyEmail: createAction(VERIFY_EMAIL)
};
