import { LOGIN, REGISTRATION, VERIFY_EMAIL } from '../../actions/auth/actions';

const initialState = {
  user: null
};
export default function auth(state = initialState, action = {}) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN: {
      return {
        ...state,
        user: payload
      };
    }
    case REGISTRATION: {
      return {
        ...state,
        user: payload
      };
    }
    case VERIFY_EMAIL: {
      return {
        ...state,
        user: payload
      };
    }
    default: {
      return state;
    }
  }
}
