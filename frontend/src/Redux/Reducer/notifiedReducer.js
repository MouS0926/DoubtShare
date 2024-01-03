import { FETCH_NOTIFIED_FAILURE, FETCH_NOTIFIED_LOADING, FETCH_NOTIFIED_SUCCESS } from "../actionTypes/actionTypes";


const initialState = {
    notified: [],
    
    error: null,
    loading: false,
  };


  export const notifiedReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_NOTIFIED_LOADING:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_NOTIFIED_SUCCESS:
        return {
          ...state,
          notified: action.payload,
          loading: false,
          error: null,
        };
      case FETCH_NOTIFIED_FAILURE:
        return {
          ...state,
          notified: null,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };