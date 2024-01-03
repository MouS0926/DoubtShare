import axios from "axios";
import { FETCH_NOTIFIED_FAILURE, FETCH_NOTIFIED_LOADING, FETCH_NOTIFIED_SUCCESS } from "../actionTypes/actionTypes";
const apiURL="http://localhost:8080"


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
    } catch (error) {
      dispatch({
        type: FETCH_NOTIFIED_FAILURE,
        payload: error,
      });
    }
  };