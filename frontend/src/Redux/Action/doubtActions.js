import axios from 'axios';
import { DOUBT_CREATE_FAILURE, DOUBT_CREATE_LOADING, DOUBT_CREATE_SUCCESS, FETCH_DOUBTS_FAILURE, FETCH_DOUBTS_LOADING, FETCH_DOUBTS_SUCCESS } from '../actionTypes/actionTypes';


const apiURL = 'https://doubtshare-api.onrender.com';

export const doubtCreateLoading = () => ({
    type: DOUBT_CREATE_LOADING,
  });
  
  export const doubtCreateSuccess = (message) => ({
    type: DOUBT_CREATE_SUCCESS,
    payload: message,
  });
  
  export const doubtCreateFailure = (error) => ({
    type: DOUBT_CREATE_FAILURE,
    payload: error,
  });


  export const createDoubtAction = (doubtData, token) => async (dispatch) => {
    dispatch(doubtCreateLoading());
    try {
      const response = await axios.post(`${apiURL}/doubt/add`, doubtData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(doubtCreateSuccess(response.data.msg));
      console.log(response.data);
    } catch (error) {
      dispatch(doubtCreateFailure(error.message));
    }
  };

  //fetch all doubst
  export const fetchDoubtsAction = (token) => async (dispatch) => {
    dispatch({ type: FETCH_DOUBTS_LOADING });
  
    try {
      const response = await axios.get(`${apiURL}/doubt/alldoubts`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      dispatch({
        type: FETCH_DOUBTS_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_DOUBTS_FAILURE,
        payload: error,
      });
    }
  };