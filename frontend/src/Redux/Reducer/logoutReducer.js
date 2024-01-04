import { LOGOUT_FAILURE, LOGOUT_LOADING, LOGOUT_SUCCESS } from "../actionTypes/actionTypes";

const initialState = {
    loading: false,
    message: '',
    error: null,
  };


  export const logoutReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGOUT_LOADING:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case LOGOUT_SUCCESS:
        return {
          ...state,
          loading: false,
          message: action.payload,
        };
      case LOGOUT_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };