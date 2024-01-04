// logoutActions.js
import axios from 'axios';
import { LOGOUT_FAILURE, LOGOUT_LOADING, LOGOUT_SUCCESS } from '../actionTypes/actionTypes';


const apiURL="https://doubtshare-api.onrender.com"


export const logoutLoading = () => ({
  type: LOGOUT_LOADING,
});

export const logoutSuccess = (message) => ({
  type: LOGOUT_SUCCESS,
  payload: message,
});

export const logoutFailure = (error) => ({
  type: LOGOUT_FAILURE,
  payload: error,
});

export const logoutAction = (token) => async (dispatch) => {
  dispatch(logoutLoading());

  try {
    const response = await axios.post(`${apiURL}/auth/logout`, {}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch(logoutSuccess(response.data.msg));
  } catch (error) {
    dispatch(logoutFailure(error.message));
  }
};
