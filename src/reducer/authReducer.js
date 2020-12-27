import {
  SIGN_IN,
  SIGN_UP,
  LOG_OUT,
  LOG_IN_SUCESS
} from './type';

export const authReducer = (state, action) => {
  const { type, payload } = action
  switch (type) {

    case SIGN_UP: {
      return {
        ...state,
        user: payload
      }
    };
    case SIGN_IN: {
      return {
        ...state,
        user: payload
      }
    };
    case LOG_OUT: {
      return {
        ...state,
        user: payload
      }
    };

    case LOG_IN_SUCESS: {
      return {
        ...state,
        user: payload
      }
    }
    default: {
      return state;
    }
  }
}