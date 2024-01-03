// userReducer.js
import { LOGIN_FAILURE, LOGIN_LOADING, LOGIN_SUCCESS } from '../actionTypes/actionTypes';

const initialState = {
  user: null,
  error: null,
  loading: false,
  token: null, 
  username: null, 
  userrole: null, 
};

export const loginReducer = (state = initialState, {type,payload}) => {
  switch (type) {
    case LOGIN_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: payload,
        loading: false,
        error: null,
        token:payload.token, 
        username: payload.username, 
        userrole: payload.userrole, 
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        user: null,
        loading: false,
        error: payload,
        token: null, 
        username: null, 
        userrole: null, 
      };
    default:
      return state;
  }
};
