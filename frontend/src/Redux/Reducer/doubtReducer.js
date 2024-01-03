import { DOUBT_CREATE_FAILURE, DOUBT_CREATE_LOADING, DOUBT_CREATE_SUCCESS } from '../actionTypes/actionTypes';

const initialState = {
  message: null,
  error: null,
  loading: false,
};

export const doubtReducer = (state = initialState, action) => {
  switch (action.type) {
    case DOUBT_CREATE_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case DOUBT_CREATE_SUCCESS:
      return {
        ...state,
        message: action.payload,
        loading: false,
        error: null,
      };
    case DOUBT_CREATE_FAILURE:
      return {
        ...state,
        message: null,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
