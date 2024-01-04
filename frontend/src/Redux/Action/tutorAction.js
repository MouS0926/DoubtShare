import axios from "axios";
import { FETCH_ASSIGNED_LOADING, FETCH_ASSIGNED_SUCCESS, FETCH_NOTIFIED_FAILURE, FETCH_NOTIFIED_LOADING, FETCH_NOTIFIED_SUCCESS } from "../actionTypes/actionTypes";
const apiURL="https://doubtshare-api.onrender.com"


 //fetch all notified doubts for tutor
 export const fetchNotifiedDoubtsAction = (token,tutorId) => async (dispatch) => {
    dispatch({ type: FETCH_NOTIFIED_LOADING });
  
    try {
      const response = await axios.get(`${apiURL}/doubt/notified/${tutorId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      dispatch({
        type: FETCH_NOTIFIED_SUCCESS,
        payload: response.data,
      });
      console.log(response.data);
    } catch (error) {
      dispatch({
        type: FETCH_NOTIFIED_FAILURE,
        payload: error,
      });
    }
  };



   //fetch all assigned doubts for tutor
 export const fetchAssignedDoubtsAction = (token,tutorId) => async (dispatch) => {
    dispatch({ type: FETCH_ASSIGNED_LOADING });
  
    try {
      const response = await axios.get(`${apiURL}/doubt/assigned/${tutorId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      dispatch({
        type: FETCH_ASSIGNED_SUCCESS,
        payload: response.data,
      });
      console.log(response.data);
    } catch (error) {
      dispatch({
        type: FETCH_NOTIFIED_FAILURE,
        payload: error,
      });
    }
  };