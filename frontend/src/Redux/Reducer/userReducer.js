import { SIGNUP_FAILURE, SIGNUP_LOADING, SIGNUP_SUCCESS } from "../actionTypes/actionTypes";

const initialState = {
    user: null,
    error: null,
    loading: false,
  };


  export const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case SIGNUP_LOADING:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case SIGNUP_SUCCESS:
        return {
          ...state,
          user: action.payload,
          loading: false,
          error: null,
        };
      case SIGNUP_FAILURE:
        return {
          ...state,
          user: null,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };