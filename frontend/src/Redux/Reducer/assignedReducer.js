import { FETCH_ASSIGNED_FAILURE, FETCH_ASSIGNED_LOADING, FETCH_ASSIGNED_SUCCESS } from "../actionTypes/actionTypes";


const initialState = {
    assigned: [],
    
    error: null,
    loading: false,
  };


  export const assignedReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_ASSIGNED_LOADING:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_ASSIGNED_SUCCESS:
        return {
          ...state,
          assigned: action.payload,
          loading: false,
          error: null,
        };
      case FETCH_ASSIGNED_FAILURE:
        return {
          ...state,
          assigned: [],
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };