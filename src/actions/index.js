import axios from "axios";
import { AUTH_USER, AUTH_ERROR, UPDATE_TITLE, UPDATE_DESC } from "./types";

export const signup = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post(
      "http://localhost:3090/signup",
      formProps
    );
    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem("token", response.data.token);
    callback();
  } catch (e) {
    if (e.response) {
      dispatch({ type: AUTH_ERROR, payload: e.response.data.error });
    } else {
      dispatch({ type: AUTH_ERROR, payload: "Connection refused" });
    }
  }
};

export const signout = () => {
  localStorage.removeItem("token");

  return {
    type: AUTH_USER,
    payload: ""
  };
};

export const signin = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post(
      "http://localhost:3090/signin",
      formProps
    );
    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem("token", response.data.token);
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: "Invalid credentials" });
  }
};

export const updateTitle = (title) => {
  return { type: UPDATE_TITLE, payload: title }
}

export const updateDescription = (desc) => {
  return { type: UPDATE_DESC, payload: desc }
}
