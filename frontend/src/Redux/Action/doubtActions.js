import axios from 'axios';
import { DOUBT_CREATE_FAILURE, DOUBT_CREATE_LOADING, DOUBT_CREATE_SUCCESS, FETCH_DOUBTS_FAILURE, FETCH_DOUBTS_LOADING, FETCH_DOUBTS_SUCCESS } from '../actionTypes/actionTypes';


const apiURL = 'https://doubtshare-api.onrender.com';
//const apiURL='http://localhost:8080'

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

//create doubt action
  // export const createDoubtAction = (doubtData, token) => async (dispatch) => {
  //   dispatch(doubtCreateLoading());
  //   try {
  //     const response = await axios.post(`${apiURL}/doubt/add`, doubtData, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     dispatch(doubtCreateSuccess(response.data.msg));
  //     console.log(response.data);
  //   } catch (error) {
  //     dispatch(doubtCreateFailure(error.message));
  //   }
  // };



  //// create doubt action
export const createDoubtAction = (doubtData, token) => (dispatch) => {
  dispatch(doubtCreateLoading());
  return axios
    .post(`${apiURL}/doubt/add`, doubtData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      dispatch(doubtCreateSuccess(response.data.msg));
      console.log(response.data);
      return response; // Pass the response to the next 'then' block if needed
    })
    .catch((error) => {
      dispatch(doubtCreateFailure(error.message));
      throw error; // Throw the error to the next 'catch' block if needed
    });
};


  //fetch all doubst
  export const fetchDoubtsAction = (token,statusFilter="") => async (dispatch) => {
    dispatch({ type: FETCH_DOUBTS_LOADING });
  
    try {

      let url = `${apiURL}/doubt/alldoubts`;

      if (statusFilter) {
        url += `?status=${statusFilter}`;
      }

      console.log("Fetch Doubts URL:", url);
      const response = await axios.get(url, {
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