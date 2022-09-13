import { CLEAR_ERRORS, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_FAIL, LOGOUT_SUCCESS } from "./userConstants";
import axios from 'axios'

// Login user
export const login = (email, password) => async (dispatch) => {
    try {

      dispatch({ 
        type: LOGIN_REQUEST
    });
  
    //   const config = { headers: { "Content-Type": "application/json" } };
  
      const { data } = await axios.post(
        `/api/v1/login`,
        { email, password },
        // config
      );
  

      dispatch({ 
        type: LOGIN_SUCCESS,
         payload: data.user 
        });

    } 
    
    catch (error) {

      dispatch({
         type: LOGIN_FAIL,
          payload: error.response.data.message 
        });
    }
  };

// Logout User
export const logout = () => async (dispatch) => {
    try {
      await axios.get(`/api/v1/logout`);
  
      dispatch({ type: LOGOUT_SUCCESS });
    } catch (error) {
      dispatch({ type: LOGOUT_FAIL, payload: error.response.data.message });
    }
  };

  // clear errors
  export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  }; 