import { API } from "../httpMethods";

import { loginFailure, loginStart, loginSuccess } from "./userRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const result = await API.post("/auth/login", user);
    dispatch(loginSuccess(result?.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};
