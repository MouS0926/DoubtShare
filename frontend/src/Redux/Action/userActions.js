import axios from "axios";
import { LOGIN_FAILURE, LOGIN_LOADING, LOGIN_SUCCESS, SIGNUP_FAILURE, SIGNUP_LOADING, SIGNUP_SUCCESS } from "../actionTypes/actionTypes";

const apiURL="https://doubtshare-api.onrender.com"

export const signupAction = (userData) => async (dispatch) => {
    dispatch({type:SIGNUP_LOADING});
    try {
      const response = await axios.post(`${apiURL}/auth/register`, userData);
      console.log(response.data);
      dispatch({type:SIGNUP_SUCCESS});
    } catch (error) {
      dispatch({type:SIGNUP_FAILURE,payload: error});
    }
  };

  //login action


  export const loginFailure = (error) => ({
    type: LOGIN_FAILURE,
    payload: error,
  });

  export const loginAction = (userData) => async (dispatch) => {
    dispatch({type:LOGIN_LOADING});
    try {
      const response = await axios.post(`${apiURL}/auth/login`, userData);
      const { token, username, userrole,userId } = response.data;
  
      // Save token, username, and user role in local storage (or in secure storage)
      localStorage.setItem('token', token);
      localStorage.setItem('username', username);
      localStorage.setItem('userrole', userrole);
      localStorage.setItem('userId', userId);
  
      dispatch({type:LOGIN_SUCCESS,payload: userData});
    //   console.log(response.data);
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  };