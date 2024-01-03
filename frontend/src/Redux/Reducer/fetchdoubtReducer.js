import { FETCH_DOUBTS_FAILURE, FETCH_DOUBTS_LOADING, FETCH_DOUBTS_SUCCESS } from "../actionTypes/actionTypes";

  
  const initialState = {
    doubts: [],
    loading: false,
    error: null,
  };
  
  export const fetchdoubtReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_DOUBTS_LOADING:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_DOUBTS_SUCCESS:
        return {
          ...state,
          doubts: action.payload,
          loading: false,
          error: null,
        };
      case FETCH_DOUBTS_FAILURE:
        return {
          ...state,
          doubts: [],
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  