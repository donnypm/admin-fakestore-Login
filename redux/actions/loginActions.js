import { LOGIN, LOGOUT } from "../reducers/types";

export const login = () => async (dispatch) => {
  dispatch({
    type: LOGIN,
    payload: user,
  });
};

export const logout = () => async (dispatch) => {
  dispatch({
    type: LOGOUT,
    payload: user,
  });
};
